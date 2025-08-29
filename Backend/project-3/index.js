const express = require("express");
require("dotenv").config();

const { Logger } = require("./middlewares/Logger");
const { connectDB } = require("./Db_Connection");
const router = require("./routes/Userroutes");

const port = process.env.PORT || 3456;
const app = express();

app.use(express.json()); // ✅ Needed for req.body
app.use(Logger);
app.use(router);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Server running at http://localhost:${port}`);
  });
});
