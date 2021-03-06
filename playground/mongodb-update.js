// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5ae06a40eaf62f287baa608f')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5ae05cdc8d495fcfb01eede0')
  },{
    $set: {
      name: 'Bn'
    }
  },{
    $inc: {
     age: 10
    }
  },{
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });

  // db.close();
});
