const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path');
const hbs = require('hbs');

//static path
const staticPath = path.join(__dirname, "../public");
const partialPath = path.join(__dirname, "../templates/partials");
const templatePath = path.join(__dirname, "../templates/views");

//setting view engine to handlebars
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

//Static website
app.use(express.static(staticPath));

//routing
app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("/", (req, res)=>{
    res.send("Welcome to the home page");
});
app.get("/about", (req, res)=>{
    res.send("Welcome to the about page");
});
app.get("*", (req, res)=>{
    res.send("404 Error!");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})