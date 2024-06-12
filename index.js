const express = require("express");
const cors = require("cors");
require("dotenv").config();

const gaushalaRoutes = require("./routes/gaushalaRoutes.js");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/gaushalas", gaushalaRoutes);

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
