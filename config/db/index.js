const mongoose = require("mongoose");

async function connect() {
  try {
    const uri =
      "mongodb+srv://dbAdmin:GbxMKSJJ7Hrv3ZOV@cluster0.lyqmb.mongodb.net/learning_nodejs?retryWrites=true&w=majority";

    await mongoose.connect(uri);

    console.log("Connect successfully to MongoDB Atlas!!!");
  } catch (error) {
    console.log("Connect failure to MongoDB Atlas!!!");
    console.error(error);
  }
}

module.exports = { connect };
