const express = require("express")
const app = express()

console.log("Working")


app.set("view engine", "ejs")

app.get("/", (req, res) =>{
    console.log("here")
    res.render("index")
})

app.listen(3000)
