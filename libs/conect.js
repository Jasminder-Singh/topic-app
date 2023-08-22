import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_URI);// You can add your mongodb URI here.
        if (res) console.log("Successfully connected");
    } catch (err) {
        console.log(err);
    }

}
export default connectDB;