import mongoose from "mongoose";

async function connectDB(){
    mongoose.set("strictQuery", false);
    const db =  await mongoose.connect('mongodb+srv://Nagi:sander121@cluster0.zbfrl.mongodb.net/naves')
    console.log(`DB se conecto en ${db.connection.name}`)
}
connectDB()