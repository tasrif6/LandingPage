import { MenuLinks, SideNavLinks } from "@/constant/NavLink";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";

export function SideNavbar(){
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="overflow-visible flex flex-col px-4 fixed h-full border dark:bg-gray-900 bg-white z-10000 transition-all">
        <div className="mt-4">
            {/*Top Logo */}
            <Image src="/logo.jpg" alt="SideLogo" width={40} height={40}/>
        </div>

        <div className="space-y-6 flex flex-col items-center mt-40">
            {SideNavLinks.map((sidelink) => {
                const Icon = sidelink.icon;
                return (
                    <Link key={sidelink.id} href={sidelink.url} className="cursor-pointer relative group">
                        <Icon className=" text-black dark:text-white"/>
                        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-md font-semibold  bg-white text-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-1000 whitespace-nowrap">
                            {sidelink.name}
                        </span>
                    </Link>
                );
            })}
        </div>

        {/* menu toggle section */}
        <div className="mt-40 flex flex-col items-center">
            <Button
                className=" hover:bg-emerald-900 cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}>   
                <Menu />            
            </Button>

            {showMenu && (
                <div className="absolute left-full top-10 w-50 items-center justify-center dark:bg-gray-900 bg-white text-black dark:text-white border overflow-visible p-6 space-y-6">
                    {MenuLinks.map((menulink) => {
                        const Icon = menulink.icon;
                        return (
                            <Link
                                key={menulink.id}
                                href={"#"} // add url in MenuLinks if needed
                                className="flex items-center space-x-2 dark:hover:bg-black hover:text-emerald-800 font-medium cursor-pointer w-full"
                            >
                                <Icon className="w-10"/>
                                <span className="text-sm">
                                    {menulink.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    </div>
  )
}

