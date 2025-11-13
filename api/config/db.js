const mongoose = require("mongoose");

exports.connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { // match the env variable
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected to ${mongoose.connection.host} successfully`
    );
  } catch (error) {
    console.error(`Error while connecting MongoDB: ${error.message}`);
    process.exit(1);
  }
};
