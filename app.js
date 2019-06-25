var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var sassMiddleware = require('node-sass-middleware');
 
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.use(sassMiddleware({
    src: path.join(__dirname, 'scss'),
    dest: path.join(__dirname, 'public/css/'),
    debug: true,
    outputStyle: 'compressed',
    prefix: '/css'
}));

app.get('/', function (req, res) {
    res.render('home', {
        title:"Главная"
    });
});
 
app.get('/team', function (req, res) {
    res.render('team', {
        title:"Команда"
    });
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);