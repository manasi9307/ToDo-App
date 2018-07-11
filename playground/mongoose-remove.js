const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove().then((result) => {
//   console.log(result);
// })


Todo.findByIdAndRemove('5b4693b0c9b2b7ffb54ef8a5').then((doc) => {
  console.log(doc);
})
