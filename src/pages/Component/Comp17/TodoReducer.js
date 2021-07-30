import TodoConstant from './TodoConstant';

import { createStore, combineReducers } from 'redux';

// 初始化的 list
const list = [
  { text: 'AAAAAA', completed: false },
  { text: 'CCCCCC', completed: true },
  { text: 'DDDDDD', completed: false },
];
/**
 * 
 * 最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。这样的好处是，任何时候，与某个 View 对应的 State 总是一个不变的对象
 */
// 定义 todos的reducer
// 两部分操作 一部分处理ADD_TODO 另一部分处理 TOGGLE_COMPLETE
const todos = (todos = list, active) => {
  switch (active.type) {
    case TodoConstant.ADD_TODO:
      return [
        ...todos,
        {
          text: active.text,
          completed: false
        }
      ];
      //由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象
    case TodoConstant.TOGGLE_COMPLETE:
      return todos.map((item, index) => {
        if (index === active.index) {
          return Object.assign({}, item,item.completed = !item.completed);
        } else {
          return item;
        }
      });
    default:
      return todos;
  }
}
// 处理 filter 
const filter = (filter = TodoConstant.FILTER.SHOW_ALL, active) => {//active 相当于vuex中的载荷 最好是个对象
  switch (active.type) {
    case TodoConstant.SHOW_FILTER:
      return active.filter;
    default:
      return filter;
  }
}
// 两个reducer进行组合  通过combineReducers方法将两个子 Reducer 合并成一个大的函数
const reducer = combineReducers({
  todos: todos,
  filter: filter
});

/**
 * const store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger)
);
createStore方法可以接受整个应用的初始状态作为参数，那样的话，applyMiddleware就是第三个参数了。
*/


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );//createStore函数接受另一个函数作为参数，返回新生成的 Store 对象

export default store;