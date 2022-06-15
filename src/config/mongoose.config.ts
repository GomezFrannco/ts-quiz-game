import mongoose from "mongoose";

export async function connectMongo(url: string) {
  await mongoose.connect(url, (err) => {
    if (!err) {
      console.log({
        message: "Connected",
      });
    } else {
      console.error({
        message: err.message,
      });
    }
  });
}
