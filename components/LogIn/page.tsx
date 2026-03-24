import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

export default function LoginPage(){
  return (
    <div className="flex justify-center  h-screen items-center">

      <FieldGroup className="">
        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Email</FieldLabel>
          <Input id="fieldgroup-email" placeholder="Jhon Wick" />
        </Field>
        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
          <Input id="fieldgroup-password" type="password" placeholder="Password length must be of 8 digits"/>
        </Field>
        <Field orientation="horizontal">
          <Button type="reset" className="cursor-pointer bg-black text-white hover:bg-white hover:text-black">
            Reset
          </Button>
          <Button type="submit" className="hover:bg-emerald-900 hover:text-white cursor-pointer">Submit</Button>
        </Field>
      </FieldGroup>

    </div>
  )
}