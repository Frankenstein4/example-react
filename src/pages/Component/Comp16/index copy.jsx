import React from "react";
import thunk from "redux-thunk";//中间件，处理异步
import {Provider} from "react-redux";
import App from "./App";
import { createStore,applyMiddleware,compose,combineReducers } from "redux";
import { todos,filter} from "./index-redux";
//用于chrome文件redux工具监听
const reduxDevtools=window.devToolsExtension?window.devToolsExtension():(f=>f);
// 创建 Redux store 来存放应用的状态，其中reducer为counter（主要用于监听数据状态修改）
const reducer = combineReducers({
    todos: todos,
    filter: filter
  });
const store = createStore(todos,compose(//compose主要用于拼接中间件
  applyMiddleware(thunk),reduxDevtools
  ));




  export default () => {


    return (
        <Provider store={store}>
        <App />
        </Provider>
    );
};