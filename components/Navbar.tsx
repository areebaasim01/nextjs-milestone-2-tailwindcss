import React from 'react'
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";



export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-[#006db0] text-white px-6 py-8 top-0 z-50">
      {/* Logo */}
      <div className="logo">
        <h2 className="text-2xl font-bold ml-7">AREEBA ANSARI</h2>
      </div>

      {/* Menu */}
      <ul className="flex space-x-10 md:space-x-10 gap-[15px] lg:mr-9">
        <li className="menu-item">
          <Link href="/" className="hover:text-black text-lg font-extrabold transition-colors">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/about" className="hover:text-black text-lg font-extrabold transition-colors">
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/skills" className="hover:text-black text-lg font-extrabold transition-colors">
            Skills
          </Link>
        </li>
        <li className="menu-item">
          <Link href="/contact" className="hover:text-black text-lg font-extrabold transition-colors">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
