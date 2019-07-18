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
 
    const items = [
        {
            title: "ice-cream shop", 
            description: "best ice-cream shop. best ice-cream shop. best ice-cream shop. best ice-cream shop.",
            button: "open project",
            url: "https://bk.asia-city.com/restaurants/news/ice-cream-shops-bangkok",
            img: "/img/ice-cream.jpg"
        },
        {
            title: "game app shop", 
            description: "game app shop. game app shop. game app shop. game app shop.",
            button: "play game",
            url: "https://www.androidauthority.com/best-game-apps-android-885955/",
            img: "/img/game-app.jpg"
        },
        {
            title: "game app shop", 
            description: "game app shop. game app shop. game app shop. game app shop.",
            button: "play game",
            url: "https://www.androidauthority.com/best-game-apps-android-885955/",
            img: "/img/game-app.jpg"
        }
    ]


    res.render('home', {
        title:"Главная", 
        items: items
    });
});
 
app.get('/team', function (req, res) {
    res.render('team', {
        title:"Команда"
    });
});
app.get('/state', function (req, res) {
    res.render('state', {
        title:"Команда"
    });
});
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);