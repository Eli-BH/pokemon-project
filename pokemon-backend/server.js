const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");

const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);

var __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/pokemon-client/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "pokemon-client", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("API running...");
  });
}

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
