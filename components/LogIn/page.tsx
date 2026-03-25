"use client"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import Link from 'next/link'

export default function LoginPage(){
  return (
    <div className="flex items-center justify-center h-screen py-2 px-4 m-4 ">
      <div className=" justify-center items-center w-1/4 h-1/2 border bg-muted px-4 py-2 rounded-xl"> 
        <FieldGroup className="justify-center w-full flex items-center">
          <Field>
            <span className="text-2xl font-bold m-4 text-center items-center justify-center">LogIn</span>
            <FieldLabel htmlFor="fieldgroup-name">Email</FieldLabel>
            <Input id="fieldgroup-email" placeholder="Jhon Wick" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input id="fieldgroup-password" type="password" placeholder="Password length must be of 8 digits"/>
          </Field>
          <Field orientation="horizontal">
            <Button type="reset" className="cursor-pointer text-black bg-white  hover:text-white hover:bg-black">
              <Link href="/signup">SignUp</Link>
            </Button>
            <Button type="submit" className="bg-emerald-900 hover:bg-emerald-700 text-white cursor-pointer">Submit</Button>
            <div className="flex px-2 py-1 items-right justify-right cursor-pointer">
              <span className="text-sm font-medium">Forgot Password?</span>
            </div>
          </Field>
        </FieldGroup>
      </div>
    </div>
  )
}