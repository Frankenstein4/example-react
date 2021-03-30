import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="group-list ">
            { this.props.todos.map((item, index) => {
              return <TodoItem {...item} key={index} toggleComplete = {this.props.toggleComplete} index = {index}></TodoItem>
            })
            }
          </div>
        </div>
      </div>
    );
  }
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    completed: PropTypes.bool
  }).isRequired).isRequired,
  toggleComplete:PropTypes.func.isRequired
}

export default TodoList;