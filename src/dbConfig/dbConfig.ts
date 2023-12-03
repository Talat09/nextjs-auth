import mongoose from "mongoose";
export async function connect() {
  try {
    //connect db
    mongoose.connect(process.env.Mongo_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("Mongodb connected Successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error,Please make sure MongoDB is running.",
        +err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something goes wrong!");
    console.log(error);
  }
}
