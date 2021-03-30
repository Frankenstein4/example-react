import TodoConstant from './TodoConstant';
//View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
const TodoAction = {
  // 增加 todo
  addTodo(text) {
    return {
      type: TodoConstant.ADD_TODO,
      text
    }
  },
  // 完成或者撤销完成状态
  toggleComplete(index) {
    return {
      type: TodoConstant.TOGGLE_COMPLETE,
      index
    }
  },
  // 更改显示的选择样式
  showFilter(filter) {
    return {
      type: TodoConstant.SHOW_FILTER,
      filter
    }
  }
};

export default TodoAction;