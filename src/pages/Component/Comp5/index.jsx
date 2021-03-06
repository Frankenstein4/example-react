import React, { useState, useEffect } from 'react';

import observer from '../../../utils/observer';


class AppTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: ''
        }

        /* 

            🐔🐔🐔 setState标准写法
            this.setState((state, props) => {
            return {counter: state.counter + props.step};
            });


            要避免在构造函数中引入任何副作用或订阅。如遇到此场景，请将对应的操作放置在 componentDidMount 中。
        */

    }

    componentDidMount () {
        this.bindEvent();
        /* 
            componentDidMount() 会在组件挂载后（插入 DOM 树中）立即调用。依赖于 DOM 节点的初始化应该放在这里。如需通过网络请求获取数据，此处是实例化请求的好地方。
            这个方法是比较适合添加订阅的地方。如果添加了订阅，请不要忘记在 componentWillUnmount() 里取消订阅
        */
    }

    bindEvent () {
        {/* 侦听handler事件，以接收信息 */ }
        observer.$on("handler", this.getMsgHandler.bind(this))
    }


    getMsgHandler (val) {
        {/* 来电回调，接收值 */ }
        console.log(val, '🤷‍♀️')
        this.setState({
            msg: val
        },()=>{})
        /* this.setState((state, props) => ({
            msg: state.msg+props.val
          })); */
        console.log(this.state.msg);//打印的是旧的值
    }


    componentWillUnmount () {
        observer.$off("handler");
    }

    render () {
        return (
            <div >
                <h1>组件二</h1>
                <p style={{ background: this.props.bg }}>接收兄弟传来的，兄弟组件改变的背景色{this.props.bg}</p>
                <h2>没有任何嵌套关系的组件之间传值 ：
                    <b>{this.state.msg}</b>
                </h2>
            </div>
        )
    }
}

export default AppTwo