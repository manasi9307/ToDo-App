//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
if(err){
  return console.log('Unable to connect to MongoDB Server');
}
console.log('Connected to MongoDB');

//findOneAndUpdate
// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5b41095f64debfb64f1e0047')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });
//db.close();
//using inc operator
db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5b4131e464debfb64f1e0496')
},{
  $set:{
    name:'Aditi'
  }
},{
  $inc:{
    age:1,
    }
},
{
  returnOriginal:false
}).then((result)=>{
  console.log(result);
});
});
