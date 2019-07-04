import React from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends React.Component {
state = {
  todos: [{
      id: 1,
      title: 'Go to gym',
      completed: false
    },
    {
      id: 2,
      title: 'Take breakfast',
      completed: false
    },
    {
      id: 3,
      title: 'Go to church',
      completed: false
    },
    {
      id: 4,
      title: 'Visit a friend',
      completed: false
    },
  ]
}

// Changing the completion status of a to do item when clicked.

markCompleted = (id) =>{
  this.setState({todos: this.state.todos.map(todo =>{
    if(todo.id === id){
      todo.completed = !todo.completed
    }
    return todo;
  })})
}

render(){
  return (
    <div className="App">
     <Todos todos={this.state.todos} markCompleted={this.markCompleted}/>
    </div>
  );
}
  
}
export default App;
