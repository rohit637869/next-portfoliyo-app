import React from 'react'
import { Db ,Collection } from 'mongodb'
import GetDatabase from '@/lib/database'
import { Circle } from 'lucide-react'

export default async function page() {
    const db = await GetDatabase()
    if(!db){   
            
        return (
            <>
                <Circle />
            </>
        )
    }

    // Main logical code
    let users = db.collection("users")
    // users.insertOne({
    //     "name":"Rohit verma"
    // })
    console.log("ADDED")


    let allusers = await users.find().toArray()

    return (
        <div>{allusers.map(e=>(`name: ${e.name} \n`))}</div>
    )
}
