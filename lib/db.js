import {MongoClient} from 'mongodb'

export async function connectToDatabase(){
   const client = await MongoClient.connect('mongodb+srv://loic:loic@cluster0.sswgg.mongodb.net/auth-demo?retryWrites=true&w=majority')

   return client
}