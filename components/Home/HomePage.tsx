"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import { Button } from "../ui/button"

const HomePage = () => {
  const [count, setCount] =useState(0)
  const [value, setValue ] =useState("")

  useEffect(() => {
    console.log("UseEffect")
  }, [count])

  useLayoutEffect(() => {
    console.log("UseLayoutEffect ")
  }, [count])
  return (
    <div className="w-full h-screen">
      <div className="flex mt-35 text-center text-5xl font-bold items-center justify-center">
        <h1 className="text-emerald-800">🌙 RAMADAN KAREEM 2026 </h1>
      </div>
  </div>)
}

export default HomePage