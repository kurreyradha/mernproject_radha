const express = require("express");
const app= express();
const mongoose= require("mongoose");
const cors= require("cors");
const bodyparser = require('body-parser')
const adminRoute= require("./routes/adminRoute");
require("dotenv").config();
const PORT=process.env.PORT || 8000

app.use(cors());
// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())


app.use("/adminuser", adminRoute);


mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected!!!");
})


app.listen(PORT, ()=>{
    console.log(`server run on ${PORT}`)
});