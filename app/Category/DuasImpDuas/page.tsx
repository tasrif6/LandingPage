import { DuasSubCat01 } from "@/constant/Duas"
import Link from "next/link"

const Duas = () => {
  return (
    <div className="relative">
        <div className="flex">
            {DuasSubCat01.map((link) => (
                <Link key={link.id} href="/duas" className="text-gray-400">
                {link.title}
                </Link>
            ))}
        </div>

        <div>
            
        </div>
    </div>
  )
}

export default Duas