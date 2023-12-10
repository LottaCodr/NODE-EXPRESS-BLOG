const express = require('express');

//create an express app
const app = express();

//create a middleware with morgan
const morgan = require('morgan')

//register view engine
app.set('view engine', 'ejs');

app.use(morgan('dev'))

//listen for requests
app.listen(3000);


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