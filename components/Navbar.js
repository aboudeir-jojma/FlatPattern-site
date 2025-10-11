export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Flat Pattern</h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
        <li><a href="#" className="hover:text-yellow-400">Shapes</a></li>
        <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
      </ul>
    </nav>
  );
}
