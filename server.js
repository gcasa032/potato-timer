require("dotenv").config({ path: "./.env.local" });
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const { config } = require("dotenv");

console.log(process.argv)

//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listeing on ${port}...`))