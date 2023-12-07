const express = require('express');

//create an express app
const app = express();

//listen for requests
app.listen(3000);
app.get('/',(req, res)=>{
res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about',(req, res)=>{
    res.sendFile('./views/about.html', {root: __dirname});

});

app.get('/about-us',(req, res)=>{
    res.redirect('/about');
});

//404 page
app.use((req, res)=> {
res.statusCode(404).sendFile('./views/404.htm', {root: __dirname})
})