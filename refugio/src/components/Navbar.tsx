'use client';
import Link from 'next/link';
import Logo from '@/images/logo.png';

const Navbar = () => {
    return (
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Logo.src} alt="Almas Unidas" className="w-8 h-8 rounded-full" />
          <span className="text-xl font-semibold text-gray-800">Almas Unidas</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <Link href="/kits" className="hover:text-blue-600">Emergency Kits</Link>
          <Link href="/map" className="hover:text-blue-600">Trust Circles</Link>
          <Link href="/reconnect" className="hover:text-blue-600">Reconnect</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </div>
      </nav>
    );
  };

export default Navbar;
