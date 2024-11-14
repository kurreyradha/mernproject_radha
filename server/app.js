const express = require("express");
const app= express();
const mongoose= require("mongoose");
const adminRoute= require("./routes/adminRoute");
require("dotenv").config();
const PORT=process.env.PORT || 8000


app.use("/adminuser", adminRoute);


mongoose.connect(process.env.DBCON).then(()=>{
    console.log("DB Connected!!!");
})


app.listen(PORT, ()=>{
    console.log(`server run on ${PORT}`)
});