const express = require('express');
//create a middleware with morgan
const morgan = require('morgan')
const mongoose = require('mongoose');

mongoose.connect(URL);

//create an express app 
const app = express();


//connect to mongoDB 
//remember to edit the password and username embbed in the link
URI = 'mongodb+srv://kinglotta:Wakavelli@cluster0.jcemsc7.mongodb.net/?retryWrites=true&w=majority';


//register view engine
app.set('view engine', 'ejs');


//listen for requests
app.listen(3000);

//static thirdparty middleware
app.use(express('public'));
app.use(morgan('dev'));

app.get('/',(req, res)=>{
    const blogs = [
        {title: 'First post', snippet: 'This is the real'},
        {title: 'Second post', snippet: 'This is the real'},
        {title: 'Third post', snippet: 'This is the real'},
    ];
res.render('index',{title: 'Home', blogs});
});

app.get('/about',(req, res)=>{
    res.render('about', {title: 'About'})

});

app.get('/about-us',(req, res)=>{
    res.redirect('/about');
});

app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create a New Blog'});
});

//404 page
app.use((req, res)=> {
res.statusCode(404).render('404');
});