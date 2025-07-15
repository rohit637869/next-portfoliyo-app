import GetDatabase from "@/lib/database";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const fd = await request.formData();
    const name = fd.get('name');
    const bio = fd.get("bio")

    try {


        const db = await GetDatabase()
        let ck  = await request.cookies.get("user")?.value.toString()
        if (!ck) {
            return NextResponse.json({ message: "User not logged in" }, { status: 401 });
        }
        const userid = JSON.parse(ck?.toString())._id
        const users = db.collection("users")
        const userinfo = await users.find({
            _id: new ObjectId(userid)
        }).toArray()
        console.log(userid)
        let updateinfo: Record<string,any> = {}

        if (name && name != "") {
            updateinfo.name = name
        }
         if (bio && bio != "") {
            updateinfo.bio =bio
        }


        let user = await users.updateOne({
            _id: new ObjectId(userid)
        },
            { $set: updateinfo })

        let fuser = await users.find({
            _id: new ObjectId(userid)
        }).toArray()

        let updatedCookie = {
            ...fuser[0],
            password: "",
            confirmPassword: ""
        }
        let cookie = await cookies()
        cookie.delete('user')
        cookie.set('user', JSON.stringify(updatedCookie))
        console.log(updatedCookie)
        return NextResponse.json({ message: "Profile updated Successfully" })

    } catch (error) {
        console.log(error)
    }
    return NextResponse.json({ message: "Server Has an Error" })
}
