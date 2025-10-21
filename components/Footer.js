export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900/90 border-t border-slate-800 text-white text-center py-6 ">
      <p className="text-sm">
        © {new Date().getFullYear()} sheet metal — All Rights Reserved
      </p>
    </footer>
  );
}
