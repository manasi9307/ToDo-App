var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model('Todo',{
  text:{
    type: String
  },
  completed:{
    type: Boolean
  },
  completedAt:{
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });

var otherTodo = new Todo({
  text: 'Feed the cat',
  completed: false,
  completedAt: 1
})

otherTodo.save().then((doc) =>{
  console.log('Saved Todo:', doc);
}, (e) => {
  console.log('Unable to save Todo');
})
