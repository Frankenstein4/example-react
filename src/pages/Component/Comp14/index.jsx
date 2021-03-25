import React, { useState, useReducer,useMemo } from 'react';
import Child from './son';
import SecondSon from './SecondSon';
import { MyContext } from '../../../utils/context-manager';



const initState = { count: 0, step: 0, number: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case 'stepInc':
            return Object.assign({}, state, { step: state.step + 1 });
        case 'numberInc':
            return Object.assign({}, state, { number: state.number + 1 });
        case 'count':
            return Object.assign({}, state, { count: state.step + state.number });
        default:
            return state;
    }
};


/* 🎅🎅🎅state可能会是一个复杂的JavaScript对象，如上例中count有可能只是 state中的一个属性。针对这种场景我们可以使用ES6的结构赋值 */
function bookReducer(state, action) {
    switch(action.type) {
        // 添加一本书
        case 'addBook':
            return {
                ...state,
                books: {
                    ...state.books,
                    [bookId]: book,
                }
            };
        case 'sub':
            // ....
        default: 
            return state;
    }
}


/* export default (props = {}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { step, number, count } = state;//解构state，就是上句代码中的state

    return (
        <MyContext.Provider value={{ dispatch }}>
            <Child step={step} number={number} count={count} />
        </MyContext.Provider>
    );
}; */


/* export default (props = {}) => {
    const [state, dispatch] = useReducer(reducer, initState);
    const { step, number, count } = state;//解构state，就是上句代码中的state

    return (
        <MyContext.Provider value={{ dispatch,step, number, count }}>
            <Child  />
        </MyContext.Provider>
    );
}; */



/* export default (props = {}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <MyContext.Provider value={{ dispatch,state }}>
            <Child  />
        </MyContext.Provider>
    );
}; */




export default (props = {}) => {
    const [state, dispatch] = useReducer(reducer, initState);

    return useMemo(() => {
        console.log('name memo 触发')
        return (
            <MyContext.Provider value={{ dispatch,state }}>
                <SecondSon/>
            </MyContext.Provider>
        );
    }, [dispatch,state.count,state.number,state.step]); 
};
