import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstances = await mongoose.connect
        (`${ process.env.MONGODB_URI}` )
        console.log(`\n Mongodb connected!!! 
            ${connectionInstances.connection.host}`);
    } catch (error) {
        console.log("Mongodb connection failed here",error);
        process.exit(1)
    }
}

export default connectDB;