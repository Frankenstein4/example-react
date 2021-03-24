import React, { useContext,useEffect} from 'react';


// 关键代码
/* function Counter(myContext) {
    const count = useContext(myContext.myContext11);  // 得到父组件传的值
    useEffect(()=>{
        console.log(myContext)
    },[myContext])
    return (
        <div>
            <h4>我是子组件</h4>
            <p>这是父组件传过来的值：{count}</p>
        </div>
    )
} */

//或者
/* function Counter({myContext11,bb,aa}) {
    const {count,val} = useContext(myContext11);  // 得到父组件传的值
    useEffect(()=>{
        console.log(val,aa,bb)
    },[])
    return (
        <div>
            <h4>我是子组件</h4>
            <p>这是父组件传过来的值：{count}</p>
            <p>{val}</p>
        </div>
    )
} */


//或者
function Counter(props) {
    const {count,val} = useContext(props.myContext11);  // 得到父组件传的值
    useEffect(()=>{
        console.log(val,props.aa,props.bb)
    },[])
    return (
        <div>
            <h4>我是子组件</h4>
            <p>这是父组件传过来的值：{count}</p>
            <p>{val}</p>
        </div>
    )
}
export default Counter;