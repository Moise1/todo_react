import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import Axios from 'axios';


class App extends React.Component {
state = {
  todos: []
}


// Fetching the todos api 

componentDidMount(){
  Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=50').then(res => this.setState({todos: res.data}));
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

// Adding a new todo item 
addTodoItem = (title)=>{
 const newTodo = {
   id: this.state.todos.length +1, 
   title, 
   completed: false
 } 
 this.setState({todos: [...this.state.todos, newTodo]});

}
// Remove/Delete a todo item.

removeTodoItem = (id)=>{
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
}


render(){
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props =>(
            <React.Fragment>
               <AddTodo addTodoItem={this.addTodoItem}/>
              <Todos 
              todos={this.state.todos} 
              markCompleted={this.markCompleted}
              removeTodoItem={this.removeTodoItem}
              />
            </React.Fragment>
          )}/>

          <Route path="/about" component={About}/>
         
        </div>
    </div>
    </Router>
    
  );
}
  
}
export default App;
