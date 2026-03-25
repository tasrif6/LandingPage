import mongoose from "mongoose";

const MONGO_URL= process.env.MONGO_URL || "";

const DBConnect = async () => {
    if (!MONGO_URL){
        console.log(`Neon Database URL is not defined`)
        return;
    } 
    const db = await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected to ", db.connection.host);
}

export default DBConnect;