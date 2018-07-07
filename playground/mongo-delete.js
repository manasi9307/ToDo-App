const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if(err){
  return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB');

// db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
//   console.log(result);
// });

//findOneandDelete
db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
  console.log(result);
})

//db.close();
});
