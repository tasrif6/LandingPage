import { assets } from "@/constant/blog"
import Image from "next/image"
import Link from "next/link"

const BlogItemPage = ({ image, title, category, description, id}) => {
  return (
    <div key={id} className="max-w-85 sm:max-w-75 hover:shadow-[-7px_7px_0px] cursor-pointer">
        <Link href={`/blogs/${id}`}>
            <Image src={image} alt="" width={400} height={500} className="border outline-none"/>
            <p className="ml-4 m-2 inline-block bg-black text-white dark:bg-white dark:text-black text-md px-2 py-1">{category}</p>
        
        <div>
            <h2 className="md:text-lg sm:text-md font-semibold mt-4 ml-2">{title}</h2>
            <p className="text-sm mb-2 ml-2">{description}</p>
        </div>
        <div className="flex items-center py-2 font-semibold text-center justify-center">Read more <Image src={assets.arrow} alt="Arrow" width={12} height={12} className="ml-2"/></div>
    </Link>
    </div>
  )
}

export default BlogItemPage