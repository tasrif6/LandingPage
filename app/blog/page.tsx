"use client"
import Navbar from '@/components/Home/Navbar'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const blogPage = () => {
    const [value, setValue] =useState("")
    const [count,setCount ] =useState(0)
  return (
    <div className="">
      <Navbar/>
        <div className="items-center justify-center mt-30 m-4 ">
            <h4 className="font-bold text-center text-4xl"> Learning Hooks:</h4>
                <div className="flex font-bold space-x-4 gap-2 text-2xl text-center py-4"> <input type="text" placeholder="Type Anything..." value={value} onChange={(e) => setValue(e.target.value)} className="w-80"/>
                <p >You typed : <strong>{value}</strong></p></div>
                <div className="flex flex-col font-bold space-x-4 gap-2 text-2xl text-center py-4">Count Increment: <Button onClick={() => setCount(count+1)}>Count</Button>
                <span>You clicked: {count} times</span>
                </div>
                        
        </div>
    </div>
  )
}

export default blogPage