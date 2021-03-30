import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  clickHandle(e) {
    e.preventDefault();
    this.props.toggleComplete(this.props.index);
  }
  render() {
    const style = {
      textDecoration: this.props.completed ? 'line-through' : 'none'
    }
    return (
      <a href="" className={ `list-group-item ${this.props.completed ? 'list-group-item-warning ' : ''}` }
        onClick={ this.clickHandle.bind(this) }
      >
        <span style={ style }>{ this.props.text }</span>
      </a>
    );
  }
}

TodoItem.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired
};

export default TodoItem;