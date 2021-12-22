const express = require("express");
const app = express();

const userRouter = require("./api/user/route");

app.use(express.json());
app.use('/api/user',userRouter)


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});
