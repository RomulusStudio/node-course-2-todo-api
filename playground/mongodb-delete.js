// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany

  db.collection('Users').deleteMany({name: 'Benjamin Fallon'}).then((result) => {
    console.log(result);
  });

  //findOneandDelete
  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5ae05b52896df7cf931d2bb0")}).then((result) => {
  //   console.log(result);
  // });


  // db.close();
});
