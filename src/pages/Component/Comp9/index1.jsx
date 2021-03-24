function LoginPage1() {
    const [name, setName] = useState(''); // 用户名
    const [pwd, setPwd] = useState(''); // 密码
    const [isLoading, setIsLoading] = useState(false); // 是否展示loading，发送请求中
    const [error, setError] = useState(''); // 错误信息
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 是否登录

    const login = (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);
        login({ name, pwd })
            .then(() => {
                setIsLoggedIn(true);
                setIsLoading(false);
            })
            .catch((error) => {
                // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                setError(error.message);
                setName('');
                setPwd('');
                setIsLoading(false);
            });
    }
    return ( 
        //  返回页面JSX Element
    )
}




/*=============================================== 改造为reducer =================================================*/
const initState = { 
    name: '', 
    pwd: '', 
    isLoading: false, 
    error:'', 
    isLoggedIn:false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                error:'',
                isLoading: true
            };
        case 'sucess':
            return {
                ...state,
                isLoggedIn:true,
                isLoading:false
            };
        case 'error':
            return {
                ...state,
                name:'',
                pwd:'',
                error: action.payload.error,
                isLoading:false
            };
        default:
            return state;
    }
};



function LoginPage2() {

    const [state, dispatch] = useReducer(reducer, initState);
    const { name, pwd, error,isLoading,isLoggedIn } = state;

    const login = (event) => {
        event.preventDefault();
        dispatch({ type: 'login' })
        login({ name, pwd })
            .then(() => {
                dispatch({ type: 'sucess' })
            })
            .catch((error) => {
                // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                dispatch({ 
                    type: 'error',
                    payload: { error: error.message }
                })
            });
    }
    return ( 
        //  返回页面JSX Element
    )
}


/* ================================改造为reducer配合useContext使用========================================== */


/* ==========👩🏼‍🦰🧓🏼👩🏼‍🦰🧓🏼🧓🏼父组件 */

import React, { useState, useReducer,useContext } from 'react';
import { ContextCs } from '../../../utils/context-manager';
const initState = { 
    name: '', 
    pwd: '', 
    isLoading: false, 
    error:'', 
    isLoggedIn:false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                error:'',
                isLoading: true
            };
        case 'sucess':
            return {
                ...state,
                isLoggedIn:true,
                isLoading:false
            };
        case 'error':
            return {
                ...state,
                name:'',
                pwd:'',
                error: action.payload.error,
                isLoading:false
            };
        default:
            return state;
    }
};



export default function LoginPage3() {

    const [state, dispatch] = useReducer(reducer, initState);
    const { name, pwd, error,isLoading,isLoggedIn } = state;

    const login = (event) => {
        event.preventDefault();
        dispatch({ type: 'login' })
        login({ name, pwd })
            .then(() => {
                dispatch({ type: 'sucess' })
            })
            .catch((error) => {
                // 登录失败: 显示错误信息、清空输入框用户名、密码、清除loading标识
                dispatch({ 
                    type: 'error',
                    payload: { error: error.message }
                })
            });
    }
    return ( 
        //  返回页面JSX Element
        <ContextCs.Provider value={{ dispatch }}>
            <Son  />
        </ContextCs.Provider>
    )
}

/* 子组件🎅🏼🎅🏼🎅🏼 */
function LoginButton() {
    // 子组件中直接通过context拿到dispatch，出发reducer操作state
    const { dispatch } = useContext(ContextCs);
    const click = () => {
        if (error) {
            // 子组件可以直接 dispatch action
            dispatch({
                type: 'error'
                payload: { error: error.message }
            });
        }
    }
}
