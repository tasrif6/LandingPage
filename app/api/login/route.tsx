import User from "@/models/User";
import { NextRequest } from "next/server";
import DBConnect from "@/lib/db";

export async function POST(request: NextRequest) {
    try {
        await DBConnect();

        const { email, password } = await request.json();

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return new Response(JSON.stringify({ message: "User not found" }), { status: 404 });
        }

        // Check password (Note: In production, you should hash passwords)
        if (user.password !== password) {
            return new Response(JSON.stringify({ message: "Invalid password" }), { status: 401 });
        }

        // Return success (don't return the full user object for security)
        return new Response(JSON.stringify({
            message: "Login successful",
        }), { status: 200 });

    } catch (error) {
        console.error("Login error:", error);
        return new Response(JSON.stringify({ message: "Internal server error" }), { status: 500 });
    }
}