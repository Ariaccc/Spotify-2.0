const express = require('express');
const mysql = require('mysql');
var cors = require('cors')

const mongoose = require ('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.user = require("./user.model");
const routes = require('./routes')
const config = require('./config.json')

const app = express();

// whitelist localhost 3000
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.set('strictQuery', true);


const CONNECTION_URL = 'mongodb+srv://cis550:cis5502022@cluster0.n6knc.mongodb.net/?retryWrites=true&w=majority';



// // Route 1 - register as GET 
// app.get('/hello', routes.hello)

// // Route 2 - register as GET 
// app.get('/jersey/:choice', routes.jersey)

// // Route 3 - register as GET 
// app.get('/matches/:league', routes.all_matches)

// // Route 4 - register as GET 
// app.get('/players', routes.all_players)

// // Route 5 - register as GET 
// app.get('/match', routes.match)

// // Route 6 - register as GET 
// app.get('/player', routes.player)

// // Route 7 - register as GET 
// app.get('/search/matches', routes.search_matches)

// // Route 8 - register as GET 
// app.get('/search/players', routes.search_players)

// Route 9 - register as GET 
app.get('/song', routes.getAllSongs)

// Route 10 - register as GET 
app.get('/search_by_content', routes.getSongsSearchByContent)

// Route 11 - register as GET 
app.get('/search_by_content_and_range', routes.getSongsSearchByContentAndRange)

// Route 12 - register as GET 
app.get('/search_by_content_and_range_and_rank', routes.getSongsSearchByContentAndRangeAndRank)

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(config.server_port, () => {
    console.log(`Server running at http://${config.server_host}:${config.server_port}/`);
  }));


module.exports = app;
