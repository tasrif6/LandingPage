import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowUpRight } from 'lucide-react'
import { Input } from '../ui/input'

const DuasNavbarPage = () => {
  return (
     <div className="overflow-hidden fixed top-0 w-full h-[12vh] flex items-center px-4 z-100 bg-black border-transparent">
    
        {/* Left — logo + title */}
        <div className="flex items-center gap-3">
            <Link href="/">
                <h6 className="text-black dark:text-white text-md font-bold">
                    Dua <span className="text-emerald-600">&</span> Ruqyah
                </h6>
                <p className="text-gray-600 dark:text-gray-300">Hisnul Muslim</p>
            </Link>
        </div>
        <div className="right-0 ml-auto space-x-4">
            <Input type="text" placeholder="Search...." className="w-10  bg-gray-500 ml-auto"/>
            {/* Right — button */}
            <Button className="text-white bg-green-500 cursor-pointer mr-20  hover:bg-green-700">
                Support Us <ArrowUpRight />
            </Button>
        </div>
    </div>
  )
}

export default DuasNavbarPage