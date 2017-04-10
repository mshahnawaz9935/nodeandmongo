const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

//const api = require('./server/routes/api');
var MongoClient = require('mongodb').MongoClient , format = require('util').format;
const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//app.use('/api', api);

app.get('/getdata', (req, res) => {
 
 var data=[];
  MongoClient.connect('mongodb://127.0.0.1:27017/test', function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
    }
    db.close();
});
MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
    if(err) throw err;

     var collection = db.collection('test');
    // collection.insert({a:2}, function(err, docs) {
    //     collection.count(function(err, count) {
    //         console.log(format("count = %s", count));
    //     });
    // });

    // Locate all the entries using find
    collection.find().toArray(function(err, results) {
        console.dir(results);
        // Let's close the db
        data = results;
         res.json(results );
        db.close();
    });
});

         
});
// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));