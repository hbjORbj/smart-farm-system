import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://sdp9:sdp9@sdp9-p8dmf.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
