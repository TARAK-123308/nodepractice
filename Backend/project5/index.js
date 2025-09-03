const express = require("express");

require("dotenv").config();
const userRouter = require("./routes/userRouter");
const reciepeRoutes = require("./routes/reciepeRoutes");
const { connectDB } = require("./dbConnect");
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());


app.use("/u", userRouter);
app.use("/reciepes", reciepeRoutes);


connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
