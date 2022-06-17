import mongoose from "mongoose";

export async function connectMongo(url: string): Promise<void> {
  return await mongoose.connect(url, (err): void => {
    if (!err) {
      return console.log({
        message: "Connected",
      });
    } else {
      return console.error({
        message: err.message,
      });
    }
  });
}

connectMongo("mongodb+srv://sukiDev:Password123%C2%A1@cluster0.8kpsl.mongodb.net/test");
