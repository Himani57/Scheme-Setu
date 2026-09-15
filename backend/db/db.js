import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongodb connected");
  } catch (err) {
    console.log("Error occured:", err);
  }
};

export default connectDb;