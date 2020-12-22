

import { Input, Button } from 'antd';
import React, { useEffect, useState,useRef ,Component, createRef, forwardRef,useImperativeHandle} from "react";
import { BankTwoTone } from '@ant-design/icons';


const Child = (props,ref) => {   
    // 接收父组件的传值
     const { params1,params2,handlerClick} = props;
     const childRef = useRef();
    // 暴露的子组件方法，给父组件调用
    useImperativeHandle(ref,() => {
         return {
            _childFn() {
                // something….
            }
        }
    })
    // handlerClick子组件调用父组件方法
     return <div 
        ref={childRef} onClick={handlerClick}>
        </div>
}
// forwardRef 配合useRef 父组件调用子组件方法使用
export default forwardRef(Child);
