require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const PORT = process.env.PORT || 5000;
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use("/api", router);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.status(200).json({ message: "WORKING!!!" });
});

const start = async () => {
  try {
    await sequelize.authenticate();

    app.listen(PORT, () => console.log(`server started ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
