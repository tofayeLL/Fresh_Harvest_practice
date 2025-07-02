'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Banner from '../home/Banner';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-black">
            <Link href="/">Fresh Harvest</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6  justify-center in-checked:">
            <Link href="/" className="hover:text-blue-500 font-medium">Home</Link>
             <Link href="/about" className="block hover:text-blue-500">Shop</Link>
          <Link href="/about us" className="block hover:text-blue-500">About Us</Link>
          <Link href="/blog" className="block hover:text-blue-500">Blog</Link>
          
          </div>
          <div className="hidden md:flex space-x-6  justify-center in-checked:">

            <Link href="/blog" className="block hover:text-blue-500">Favourites</Link>
          <Link href="/blog" className="block hover:text-blue-500">Cart</Link>
         <button className='border-[1px] border-black p-1 flex justify-center items-center'> <Link href="/blog" className="block hover:text-blue-500">Sign In</Link></button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-blue-500">Home</Link>
          <Link href="/about" className="block hover:text-blue-500">Shop</Link>
          <Link href="/about us" className="block hover:text-blue-500">About Us</Link>
          <Link href="/blog" className="block hover:text-blue-500">Blog</Link>
          <Link href="/blog" className="block hover:text-blue-500">Favourites</Link>
          <Link href="/blog" className="block hover:text-blue-500">Cart</Link>
         <button className='border-[1px] border-black p-1 flex justify-center items-center'> <Link href="/blog" className="block hover:text-blue-500">Sign In</Link></button>
        </div>
      )}




      {/* nav Banner */}

      <Banner></Banner>
    </nav>
  );
}
