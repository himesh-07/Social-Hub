import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.REACT_APP_API_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
