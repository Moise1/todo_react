import React from 'react'; 
import PropTypes from 'prop-types';

class TodoItem extends React.Component{ 

    getStyle = ()=>{
        return {
            backgroundColor: '#f4f4f4', 
            padding: '10px', 
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
          </div>
      )
    }
  }
  
  TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
  }
  export default TodoItem;