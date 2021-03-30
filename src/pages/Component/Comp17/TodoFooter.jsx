import React, { Component } from 'react';
import { Link, history } from 'umi';
class TodoFooter extends Component {
  constructor(props) {
    super(props);
    this.renderBtn = this.renderBtn.bind(this);
    console.log(this.props);
  }
  renderBtn(ActionConstant, text) {
    return (
      <div className="col-md-4">
        <button className='btn btn-default btn-block'  disabled = {`${this.props.filter === ActionConstant ? 'disabled' : ''}`} onClick={ e => {this.props.showFilter(ActionConstant);} }>{ text }</button>
      </div>
    )
  }


  aa(){
      console.log(11);
     

    history.push({
        pathname: '/Component/Comp15',
      });
  }


  render() {

    return (
        <div>
            <div className="col-md-12">
        <hr />
        
        { this.renderBtn(this.props.TodoConstant.FILTER.SHOW_ALL, 'All') }
        { this.renderBtn(this.props.TodoConstant.FILTER.SHOW_ACTIVE, 'Active') }
        { this.renderBtn(this.props.TodoConstant.FILTER.SHOW_COMPLETED, 'Completed') }
        
      </div>
            <div>
        <button onClick={()=>{this.aa()}}>跳转</button>
        </div>
        </div>
    );
  }
}

export default TodoFooter;