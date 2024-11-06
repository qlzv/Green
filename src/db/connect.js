import mongoose from "mongoose";

const url =
  "mongodb+srv://202311042:202311042@cluster0.d2yzjc3.mongodb.net/green";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 45000,
      connectTimeoutMS: 30000,
    });

    console.log("Database connected!");
  } catch (err) {
    console.error("Failed to connect to the database", err);
    throw err;
  }
};

export { connectToDatabase };
