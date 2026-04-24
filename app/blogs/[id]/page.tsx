"use client"
import { use, useEffect, useState } from "react"
import { blog_data } from '@/constant/blog';
import Navbar from "@/components/Home/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

type BlogType = {
      id: number;
      title: string;
      description: string;
      image: any;
      date: number;
      category: string;
      author: string;
      author_img: any;
    };
const BlogsIdPage = ({ params }: { params: Promise<{ id: string }> }) => {    
  
  const [data, setData] = useState<BlogType | null>(null);
  const { id } = use(params)  

  const fetchBlogData = () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {  
        setData(blog_data[i]);
        console.log(blog_data[i])
        break
      }
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, []) 

  return ( data ?<>
    <div className="text-black"><Navbar/>
      <div className="bg-gray-200">
        <div className="mt-20 text-center justify-center items-center flex flex-col"> 
          <form className="justify-between max-w-500px scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-2xl hover:shadow-[-7px_7px_0px]" action=""><input type="email" placeholder="Enter your Email" className="text-lg m-2 px-2 outline-none placeholder:text-black"/>
            <Button type="submit" className="m-2 cursor-pointer right-0 border rounded-b-2xl ">Subscribe</Button>
          </form>      
        </div>

        <div className="text-center mt-10">
          <h2 className="md:text-2xl sm:text-xl font-bold  max-w-130 mx-auto">{data.title}</h2>
          <Image src={data.author_img} width={130} height={100} alt="author_Image" className="mx-auto border hover:border-black rounded-full"/>
          <p className="text-lg font-semibold mx-auto max-w-200">{data.author}</p>

        </div>
      </div>
      <div className="items-center justify-center mx-auto outline-none max-w-200 mb-10">
        <Image src={data.image} alt="" width={900} height={800} className="border rounded-full"/>
        <h1 className="space-y-2 text-center text-2xl font-semibold">Introduction: </h1>
        <p className="text-md">{data.description}</p>
      </div>
    </div> 
    </>  : <> <h2>No data to be shown here</h2></>
  )
}

export default BlogsIdPage  