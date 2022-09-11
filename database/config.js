import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://mCalderonBuono:sIXqU11SJ8l3iGyR@calendardb.xjhvxra.mongodb.net/calendarDB",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("error connecting to MongoDD", error.message)
  );

/* const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CNN);

    console.log("Db online");
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting database");
  }
};*/
