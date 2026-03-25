"use client"
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen py-2 px-4 m-4 ">
      <div className="justify-center items-center w-1/4 h-1/2 border bg-muted px-4 py-2 rounded-xl"> 
        <FieldGroup className="justify-center w-full flex items-center">
          <Field>
            <span className="text-2xl font-bold m-4 text-center items-center justify-center">SignUp</span>
            <FieldLabel htmlFor="fieldgroup-name">Email</FieldLabel>
            <Input id="fieldgroup-email" placeholder="Jhon Wick" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
            <Input id="fieldgroup-password" type="password" placeholder="Password length must be of 8 digits"/>
            <FieldLabel htmlFor="fieldgroup-conf-pass">ConFirm Password</FieldLabel>
            <Input id="fieldgroup-conf-pass" type="password" placeholder="Confirm Password" />
          </Field>
          <Field>
            <Button type="submit" className="bg-emerald-900 hover:bg-emerald-700 text-white cursor-pointer w-full">Submit</Button>
          </Field>
        </FieldGroup>
      </div>
    </div>
  )
}