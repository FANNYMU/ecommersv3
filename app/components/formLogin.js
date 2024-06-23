import "../css/input.css"

export function InputForm() {
  return (
    <main className="grid justify-center items-center main">
      <div className="bg-white rounded-xl w-72 h-96 flex flex-col items-center justify-center">
        <h1 className="title mb-5 text-2xl">Login</h1>
        {/* Gmail */}
        <label
          htmlFor="UserEmail"
          className="Gmail relative block overflow-hidden rounded-md border border-[#4A5568] px-3 pt-3 shadow-sm focus-within:border-[#6B46C1] focus-within:ring-1 focus-within:ring-[#6B46C1]"
        >
          <input
            type="email"
            id="UserEmail"
            placeholder="Email"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-[#CBD5E0] sm:text-sm"
          />

          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#A0AEC0] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Email
          </span>
        </label>
        {/* Password */}
        <label
          htmlFor="UserPassword"
          className="Password mt-10 relative block overflow-hidden rounded-md border border-[#4A5568] px-3 pt-3 shadow-sm focus-within:border-[#6B46C1] focus-within:ring-1 focus-within:ring-[#6B46C1]"
        >
          <input
            type="password"
            id="UserPassword"
            placeholder="Password"
            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 text-[#CBD5E0] sm:text-sm"
          />

          <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-[#A0AEC0] transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
            Password
          </span>
        </label>
      </div>
    </main>
  );
}
