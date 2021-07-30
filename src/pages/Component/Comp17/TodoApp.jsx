import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoConstant from './TodoConstant';
import TodoAction from './TodoAction';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    console.log('this.props',this.props)
  }
  // 实际上处理增加todo的方法 这个方法通过props分发到了Todoheader
  addTodoHandle(text) {
    this.props.dispatch(TodoAction.addTodo(text));
  }
  // 处理完成与取消完成状态的todo 这个方法通过props分发到了TodoList再分发到了TodoItem
  toggleComplete(index) {
    this.props.dispatch(TodoAction.toggleComplete(index));
  }
  // 处理显示 通过 props分发到了TodoFooter
  showFilter(filter) {
    this.props.dispatch(TodoAction.showFilter(filter));
    //相当于 this.props.dispatch({type:'SHOW_FILTER', filter});
  }
  render() {
    return (
      <div style={ { width: 600, margin: '0 auto' } }>
        <TodoHeader addTodo={ this.addTodoHandle.bind(this) }></TodoHeader>
        {/* todos 通过props分发到了 TodoList */}
        <TodoList todos={ this.props.todos } toggleComplete={ this.toggleComplete.bind(this) }></TodoList>
        {/* 分发到TodoFooter的除了 filter 之外 还有 TodoConstant 常量对象 */}
        <TodoFooter filter={ this.props.filter } showFilter={ this.showFilter.bind(this) } TodoConstant={ TodoConstant }></TodoFooter>
      </div>
    );
  }
}
// 控制显示的列表
// 触发之后，state更新，因此todos的状态是更新的，但是在显示的过程中，需要根据filter去显示
const filterTodos = (todos, filter) => {
  switch (filter) {
    case TodoConstant.FILTER.SHOW_ACTIVE:
      return todos.filter((item) => {
        return !item.completed;
      });
    case TodoConstant.FILTER.SHOW_COMPLETED:
      return todos.filter((item) => {
        return item.completed;
      });
    default:
      return todos;
  }
}
// 用于connect进行state的注入
const getList = (state) => {
  console.log('state',state);
  return {
    todos: filterTodos(state.todos, state.filter),
    filter: state.filter,
    aa:'hello'+state.filter
  };//???这里return出去的是组件的props吗  答案：是的
};
export default connect(getList)(TodoApp);

/**
 * React-Redux 提供connect方法，用于从 UI 组件生成容器组件。
    * const VisibleTodoList = connect(
    mapStateToProps,    输入逻辑
    mapDispatchToProps  输出逻辑
    )(TodoList)


    connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑。
    前者负责输入逻辑，即将state映射到 UI 组件的参数（props），
    后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action
 * 
*/