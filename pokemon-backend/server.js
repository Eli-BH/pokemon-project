const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
