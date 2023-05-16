const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://gianca:password@mongo-db:27017/Users?authSource=admin",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Nos conectamos correctamente...");
  } catch (error) {
    console.log("Error -> ", error);
  }
};

module.exports = { connectToDB };
