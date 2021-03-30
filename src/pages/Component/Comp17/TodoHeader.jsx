import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertText: '出现错误',
      showAlert: false
    }
  }
  clickHandle() {
    this.setState({
      showAlert: false
    });
    const value = this.refs.input.value.trim();
    if (value.length === 0) {
      this.setState({
        alertText: '不能为空',
        showAlert: true
      });
      return false;
    }
    this.props.addTodo(value);
    this.refs.input.value = "";
  }
  render() {
    return (
      <div className="row">
        <h1>Todos</h1>
        <div className="col-md-12">
          <div className="alert alert-danger " role="alert" style={ { display: this.state.showAlert ? 'block' : 'none' } }>
            <span>{ this.state.alertText }</span>
          </div>
        </div>
        <div className="form-group col-md-12">
          <div className="col-md-11 no-padding">
            <input type="text" className="form-control" placeholder="input todo..." ref="input" />
          </div>
          <div className="col-md-1 no-padding text-right">
            <button className="btn btn-default" onClick={ this.clickHandle.bind(this) } ><span className="glyphicon glyphicon-plus"></span>增加</button>
          </div>
        </div>
      </div>
    )
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default TodoHeader;