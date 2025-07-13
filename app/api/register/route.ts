import GetDatabase from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.formData();

    const fulldata: Record<string, any> = {
        activated: true,
        current_time: new Date().toISOString()

    };

    for (const key of data.keys()) {
        fulldata[key] = data.get(key);
    }

    // console.log(fulldata);
    let db = await GetDatabase()
    if (!db) {
        throw ("Error aa gaya database me sahi kar le")
    }

    let users = db.collection('users')
    let checkemail = await users.find({ email: fulldata.email }).toArray();
    if (checkemail.length > 0) {
        return NextResponse.json({ "message": "Email already exists" })
    }
    let user = await users.insertOne(fulldata)
    console.log(user)
    return NextResponse.json({ message: "success" });
}
