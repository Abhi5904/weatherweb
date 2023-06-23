const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const port = 5000

// public static path 
const staticPath = path.join(__dirname,"../public")
const hbsPath = path.join(__dirname,"../templates/views")
const partialPath = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",hbsPath)
app.use(express.static(staticPath))
hbs.registerPartials(partialPath)

// routing 
app.get("/",(req,res)=>{
    res.render("index")
})

app.get("/about",(req,res)=>{
    res.render("about")

})

app.get("/weather",(req,res)=>{
    res.render("weather")
})

app.get("*",(req,res)=>{
    res.render('404error')
})
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`)
})