const express = require("express");
const cors = require("cors");

const apis = require("./controllers/api")

const app = express();
app.use(cors());
app.use(express.json())


const PORT = 7000;

const connectToDatabase = require("./config/connection");
connectToDatabase();

app.post("/add-expenses", apis.new_expense);
app.get("/all-expenses", apis.all_expenses);



app.listen(PORT, () => {
  console.log(`App is listning on port - ${PORT}`);
  console.log(Date.now());
});
