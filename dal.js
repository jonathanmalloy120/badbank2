const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
let db = null;

//connect to mongo
MongoClient.connect(url, {useUnifiedTopology: true},function(err,client){
    console.log('connection to database in DAL.js successful!');

    //connect to myproject DB. DB is set here and is always available, but we could
    //swap this out with a new DB and the rest of the code would still work
    //hence dal = data abstraction layer
    db = client.db('myproject');
});

//create account
function create(name,email,password){
    return new Promise((resolve,reject) =>{
        const collection = db.collection('users'); // get collection of all users
        const doc = {name,email,password, balance:0}; //make a user
        collection.insertOne(doc, {w:1}, function(err,result){ //insert the user and resolve/ reject promise
            err ? reject(err) :resolve(doc);
        });
    })
}

//all users
function all() {
    return new Promise((resolve,reject) => {
        const customers = db //get db
        .collection('users') //target collection'users'
        .find({}) //find all
        .toArray(function(err,docs) {
            err ? reject(err) : resolve(docs) //if error reject, else resolve
        });
    })

}

module.exports = {create,all};