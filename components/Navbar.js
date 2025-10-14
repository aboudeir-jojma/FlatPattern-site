export default function Navbar() {
  return (
<nav
  className="
    fixed top-0 left-0 w-full
    bg-[#2E2E2E]
    text-white shadow-lg z-50
    flex justify-center items-center
    py-4 px-6 backdrop-blur-sm border-b border-gray-500
  "
>
      <h1 className="
        text-3xl font-extrabold tracking-wide
        text-white
        drop-shadow-[0_2px_2px_rgba(0,0,0,0.4)]
        select-none
      ">
        Flat Pattern
      </h1>
    </nav>
  );
}
