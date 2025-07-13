import GetDatabase from "@/lib/database";
import { Db } from "mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const db  = await GetDatabase()
    let data = await request.formData()
    let users = db.collection('users')
    let user = await users.findOne({ email: data.get('email'), password: data.get('password') })
    if(user&&user.email){

    }
    else{
        return NextResponse.json({message:"Username or password is incorrect"}, {status: 401})
    }

    user.password = ""
    user.confirmPassword = ""

    let ck = await cookies()
    ck.set('user', JSON.stringify(user), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/',
        sameSite:"strict",
        httpOnly:false
    })
    return NextResponse.json({ message: "Logged in successfully" })
    
}
