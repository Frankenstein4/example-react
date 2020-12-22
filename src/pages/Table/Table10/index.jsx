import { Input, Button } from 'antd';
import React, { useEffect, useState,useRef ,Component, createRef, forwardRef} from "react";
import { BankTwoTone } from '@ant-design/icons';
import Child from './MyWorldMap'
/* import myContext from './createContext' */

function App() {
  
    const dataobj = {
        pdata1: 1,
        pdate2:2
   }
    //const [dataobj,setDataobj ] = useState({});
    const pchildref = useRef();
    function parantHandler() {
       // 子组件调用的父组件方法
   }
    function parentDivClick() {
       // 父组件调用子组件方法
       pchildref .current._childFn();
   }
    return (
       <div>
           <Child 
                ref={pchildref}
                params1={dataobj.pdata1}
                params2={dataobj.pdata2}
                handlerClick={parantHandler}>
           </Child>
           <div onClick={parentDivClick}>1111</div>
       </div>
   )



}
export default App;