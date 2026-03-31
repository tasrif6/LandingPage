"use client";
import { NavLinks } from '@/constant/NavLink'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Input } from '../ui/input';
import { ThemeToggle } from '@/app/theme-toggle';

export default function Navbar() {
  return (
    <div className="overflow-hidden fixed top-0 left-0 w-full h-[12vh] flex border items-center px-4 z-10000 transition-all duration-300">
      <Image src="/logo.jpg" alt="logo" height={40} width={40} />

      <div className="relative">
        <Link href="/">
        <h6 className="ml-3 text-black dark:text-white text-md font-bold">
        Dua <span className="text-emerald-600">&</span> Ruqyah
        </h6>
        <p className="text-gray-600 dark:text-gray-300 ml-3">Hisnul Muslim</p>
        </Link>
      </div>

      {/* center: nav links */}
      <div className=" flex-1 flex items-center justify-center space-x-6 text-gray-800 dark:text-gray-200">
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} className="hover:text-emerald-600 cursor-pointer">
            {link.name}
          </Link>
        ))}
      </div>

      {/* right: future content placeholder */}
      <div className="flex items-center space-x-4">
        {/* put right-side items here */}
        
        <Button className="px-6 py-2 text-sm md:text-md text-white font-bold bg-emerald-600 cursor-pointer border-rounded hover:text-black hover:bg-emerald-600"><Link href="/login">LogIn</Link></Button>
        <Button><ThemeToggle /></Button>
        <Input
          type="text"
          placeholder="Search..."
          className="w-48 border-rounded border-emerald-900 bg-white dark:bg-black dark:text-white dark:border-emerald-600 dark:placeholder-gray-400"
        />
        </div>
    </div>
  )
}
