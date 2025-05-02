'use client';
import Link from 'next/link';
import Logo from '@/images/logo.png';

const Navbar = () => {
  return (
    <nav className="nav-bar bg-white shadow px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={Logo.src} alt="Logo" className="h-10 w-auto" />
        <span className="font-bold text-xl">Almas Unidas</span>
      </div>
      <ul className="flex gap-4 text-sm font-medium">
        <li><Link href="/emergency-kit">Emergency Kits</Link></li>
        <li><Link href="/trust-circles">Trust Circles</Link></li>
        <li><Link href="/reconnect">Reconnect</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
