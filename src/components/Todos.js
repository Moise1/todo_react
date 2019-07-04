import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component{ 


  render(){
    return this.props.todos.map(todo => (
      <TodoItem 
       key={todo.id} 
       todo={todo}
       markCompleted={this.props.markCompleted}
       removeTodoItem={this.props.removeTodoItem}
       />
    ))
  }
}


//PropTypes 
Todos.propTypes = {
  todos: PropTypes.array.isRequired, 
  markCompleted: PropTypes.func.isRequired, 
  removeTodoItem: PropTypes.func.isRequired
}

export default Todos;
