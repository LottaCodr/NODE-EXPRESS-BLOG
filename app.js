const express = require("express");
//create a middleware with morgan
const morgan = require("morgan");
const mongoose = require("mongodb");
const Blog = require("./models/blog");

//create an express app
const app = express();

//connect to mongoDB
URI =
mongoose
  .connect(URL, { userNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log("couldnt connect to db"));

//register view engine
app.set("view engine", "ejs");

//static thirdparty middleware
app.use(express("public"));
app.use(morgan("dev"));

//these are the routes
app.get("/add-blog", (res, req) => {
  const blog = new Blog({
    title: "new blog",
    snippet: "about my new blog",
    body: "more about my new blog",
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log("Please try again");
    });
});

app.get("/", (req, res) => {
  const blogs = [
    { title: "First post", snippet: "This is the real" },
    { title: "Second post", snippet: "This is the real" },
    { title: "Third post", snippet: "This is the real" },
  ];
  res.render("index", { title: "Home", blogs });
});

app.get('/blog', (req, res)=> {
Blog.find().sort({ createdAt: -1 })
.then((result)=>{
    res.render('index', {title: 'All Blogs', blogs: results})
})
.catch((err)=> {
    console.log(err);
})
})

app.get("/all-blogs", (res, req) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/single-blog", (req, res) => {
  Blog.findById("put id inside here")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a New Blog" });
});

//404 page
app.use((req, res) => {
  res.statusCode(404).render("404");
});
