import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowUpRight, Search } from 'lucide-react'
import { Input } from '../ui/input'
import { useState } from 'react'

const DuasNavbarPage = () => {
    // const showSearchBar = onClick = {() =()}
  return (
     <div className="overflow-hidden fixed top-0 w-full h-[12vh] flex items-center px-4 z-100 dark:bg-black bg-white border">
    
        {/* Left — logo + title */}
        <div className="items-center gap-4">
            <Link href="/">
                <h6 className="text-black dark:text-white text-md font-bold">
                    Dua <span className="text-emerald-600">&</span> Ruqyah
                </h6>
                <p className="text-gray-600 dark:text-gray-300">Hisnul Muslim</p>
            </Link>
        </div>
        <div className=" flex right-0 ml-auto space-x-4">
            <div className="group flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-600 hover:dark:border-emerald-700 rounded-xl bg-white dark:bg-black overflow-hidden w-11 hover:w-60 transition-all duration-300 ease-in-out cursor-pointer">
                <Search
                    className="shrink-0 text-gray-400"
                    size={20}
                />
                <input
                    type="search"
                    placeholder="Search..."
                    className="bg-transparent border-none outline-none text-sm text-white dark:text-white placeholder:text-gray-400 w-full opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-200 delay-100"
                />
            </div>
            {/* Right — button */}
            <Button className="text-white bg-green-500 cursor-pointer mr-20  hover:bg-green-700">
                Support Us <ArrowUpRight />
            </Button>
        </div>
    </div>
  )
}

export default DuasNavbarPage