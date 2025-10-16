export default function Navbar() {
  return (
<nav
  className="
    fixed top-0 left-0 w-full
    bg-slate-900/90 border-b border-slate-800
    text-white shadow-lg z-50
    flex justify-center items-center
    py-4 px-6 backdrop-blur-sm
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
