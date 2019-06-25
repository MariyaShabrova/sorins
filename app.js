var express = require('express');
var exphbs  = require('express-handlebars');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('home', {
        title:"Главная"
    });
});
 
app.get('/contact', function (req, res) {
    res.render('contact', {
        title:"Контакты"
    });
});

app.listen(3000);