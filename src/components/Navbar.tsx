// components/Navbar.js
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="relative w-20 h-15 cursor-pointer">
            <Image
              src="/images/brand_logo.png"
              alt="logo"
              fill
              className="object-contain"
            />
          </div>
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
