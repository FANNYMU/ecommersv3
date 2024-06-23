'use client'
import React, { useEffect, useState } from 'react';
import '../css/home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const endpoint1 = process.env.NEXT_PUBLIC_API_URL;
    const endpoint2 = process.env.NEXT_PUBLIC_API_URL_1;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response1 = await fetch(endpoint1);
                const data1 = await response1.json();

                const response2 = await fetch(endpoint2);
                const data2 = await response2.json();

                // Olah data dari API pertama
                const processedData1 = data1.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.image, // Sesuaikan dengan struktur data API pertama
                }));

                // Olah data dari API kedua
                const processedData2 = data2.map(product => ({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    image: product.images[0], // Gunakan gambar pertama dari array images
                }));

                // Gabungkan data dari kedua API
                const combinedProducts = [...processedData1, ...processedData2];

                setProducts(combinedProducts);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchProducts();
    }, [endpoint1, endpoint2]);

    return (
        <div className="home-container">
            <h1>Product List</h1>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.title} className="product-image"/>
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-price">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
