import React from 'react'; 
import PropTypes from 'prop-types';

class TodoItem extends React.Component{ 

    getStyle = ()=>{
        return {
            backgroundColor: '#f4f4f4', 
            padding: '4px', 
            borderBottom: '1px #ccc dotted', 
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

    render(){
        const {title, id} = this.props.todo;
      return (
          <div style={this.getStyle()}>
              <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} /> {'  '}
              {title}
          <button style={styleBtn} onClick={this.props.removeTodoItem.bind(this, id)}>x</button>
          </div>
      )
    }
  }
  
  // Using proptypes.
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }

  // Button style 
  const styleBtn = {
    backgroundColor: '#ff0000', 
    color: '#fff', 
    border: 'none', 
    margin: '0',
    padding: '6px 10px',
    borderRadius: '50%', 
    cursor: 'pointer', 
    float: 'right'
  }
  export default TodoItem;