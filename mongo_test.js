const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true},function(err,client){
    console.log('connection successful!')

    //database name
    const dbName = 'testDB';
    const db = client.db(dbName);

    //new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@testmail.edu';

    //insert into customer table
    var collection = db.collection('customers');
    var doc = {name,email}; //from before
    collection.insertOne(doc, {w:1}, function(err,result) {
        console.log('document inserted successfully: ', doc);
    });

    var customers = db
    .collection('customers')
    .find()
    .toArray(function(err,docs) {
        console.log('here is the collection: ', docs);

        //clean up
        client.close();
    });
});