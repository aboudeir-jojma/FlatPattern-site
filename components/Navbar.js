export default function Navbar() {
  return (
    <nav className="
      fixed top-0 left-0 w-full 
      bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
      text-white shadow-lg z-50
      flex justify-center items-center
      py-4 px-6 backdrop-blur-sm border-b border-gray-700
    ">
      <h1 className="
        text-3xl font-extrabold tracking-wide
        bg-clip-text text-transparent
        bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-400
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]
        select-none
      ">
        Flat Pattern
      </h1>
    </nav>
  );
}
