import mongoose from "mongoose";

/**
 * connect to the database running on the connection string provided
 *
 * @param   {String} connectionString : Mongo DB Connection string
 */

const connectToMongo = async (connectionString: string): Promise<void> => {
  try {
    // await connection from mongo
    const connection = await mongoose.connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log(`--> Connected to MongoDB on ${connection.connection.host}`);
  } catch (error) {
    console.error(`Can't connect to MongoDB: ${error}`);
    process.exit(1);
  }
};

export { connectToMongo };
