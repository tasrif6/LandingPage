"use client"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'



export default function LoginPage(){
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const router = useRouter()
  const [formData, setFormData]= useState({
    email: "",
    password: ""
  })

  const handleSubmit = async () => {
    setError("")
    setSuccess("")

    if (!formData.email || !formData.password) {
      setError("All fields are required")
      return
    }

    try {
      const res = await axios.post("/api/login", formData)

      if (res.status === 200) {
        setSuccess("Login Successful")
        router.push("/")
        return
      }

      setError(res.data?.message || "Login failed")
      return
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Something went wrong")
      } else {
        setError("Something went wrong")
      }
      return
    }
  }
  
  return (
    <div className="flex items-center justify-center h-screen py-2 px-4 m-4 ">
      <div className=" justify-center items-center w-1/4 h-1/2 border bg-muted px-4 py-2 rounded-xl"> 
        <FieldGroup className="justify-center w-full flex items-center">
          <Field>
            <span className="text-2xl font-bold m-4 text-center items-center justify-center">LogIn</span>
            <FieldLabel htmlFor="fieldgroup-name">Email</FieldLabel>
            <Input id="fieldgroup-email" placeholder="Jhon Wick" onChange={(e) => setFormData({...formData, email:e.target.value})} value={formData.email}/>
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input id="fieldgroup-password" type="password" placeholder="Password length must be of 8 digits" onChange={(e) => setFormData({...formData, password: e.target.value})} value={formData.password}/>
            {error && <span className="text-red-600">{error}</span>}
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" className="cursor-pointer text-black bg-white  hover:text-white hover:bg-black">
              <Link href="/signup">SignUp</Link>
            </Button>
            <Button type="submit" className="bg-emerald-900 hover:bg-emerald-700 text-white cursor-pointer" onClick={handleSubmit}>Submit</Button>
            <div className="flex px-2 py-1 items-right justify-right cursor-pointer">
              <span className="text-sm font-medium">Forgot Password?</span>
            </div>
          </Field>
        </FieldGroup>
      </div>
    </div>
  )
}