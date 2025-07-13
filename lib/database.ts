import { Db, MongoClient } from 'mongodb'

let url = "mongodb+srv://rohitverma637869:6378695548@firstcluster.yt3ryn5.mongodb.net/?retryWrites=true&w=majority&appName=firstcluster"

let client = new MongoClient(url)

export default async function GetDatabase(): Promise<Db> {

    await client.connect()
    let database = client.db("mydatabase")
    return database
    // database.collection('asdhg')



}