const mongoose =  require("mongoose")

const connectionString = process.env.DATABASE;

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("mongodb running successfully");
  })
  .catch((error) => {
    console.log(error);
  });
