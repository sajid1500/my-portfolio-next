// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-xl font-bold cursor-pointer">Sajid</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/about">
              <p className="hover:text-gray-300 cursor-pointer">About</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="hover:text-gray-300 cursor-pointer">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <p className="hover:text-gray-300 cursor-pointer">Contact</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;