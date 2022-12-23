import mongoose from "mongoose";

export const connectToDatabase = async () => {
  //   if (mongoose.connections[0]) {
  //     return;
  //   }
  await mongoose
    .connect(
      "mongodb+srv://admin:amil4444@cluster0.odaejfg.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("connected"))
    .catch((err) => console.log(err, "connection error"));
};
