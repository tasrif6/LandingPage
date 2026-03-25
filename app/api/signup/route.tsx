import DBConnect from "@/lib/db";
import { NextRequest } from "next/server";
import User from "@/models/User";

export async function POST(request: NextRequest){
    await DBConnect();

    const {email, password, conf_password} = await request.json();
    if (!email || !password || !conf_password){
        return new Response(JSON.stringify({message: "All fields are mandatory to be filled"}), {status: 400})

    }
    if (password !== conf_password){
        return new Response(JSON.stringify({message: "Password didn't match"}), {status: 400})
    }

    const existingUser = await User.findOne({email});
    if (existingUser) {
        return new Response(JSON.stringify({message: "User already exists"}), {status: 400})
    }
    const user = await User.create({email, password})
    if (!user){
        return new Response(JSON.stringify({message: "Something went wrong"}), {status: 400})
    }
    return new Response(JSON.stringify(user), {status: 201})
    // await DBConnect();
}