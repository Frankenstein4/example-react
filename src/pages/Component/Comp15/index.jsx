import React, {Fragment} from 'react'
import { useState, useEffect, useCallback, useMemo } from 'react'

const nameList = ['apple', 'peer', 'banana', 'lemon']





/* 
点击一次修改名字出现：
                    getProductName触发
                    name effect 触发
                    getProductName触发
因为修改了名字，然后react更改了DOM，触发了getProductName
随后调用了name的effect（在dom更新之后触发，这也是为什么叫做副作用）
effect中调用了getProductName

点击一次修改价格出现：
                    getProductName触发
                    price effect 触发
显然当我使用setPrice的时候，产生DOM操作，刷新页面DOM的同时也，触发了在p标签中的getProductName函数
然后调用副作用触发了price的effect

*/
/* const Example = (props) => {
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')
    
    
    function getProductName() {
        console.log('getProductName触发')
        return name
    }
    // 只对name响应
    useEffect(() => {
        console.log('name effect 触发')
        getProductName()
    }, [name])
    
    // 只对price响应
    useEffect(() => {
        console.log('price effect 触发')
    }, [price])

    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            <p>{getProductName()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
} */







/** 
点击一次修改价格出现：
                    getProductName触发
                    price effect 触发
显然当我使用setPrice的时候，产生DOM操作，刷新页面DOM的同时也，触发了在p标签中的getProductName函数
然后调用副作用触发了price的effect🧓🏼🧓🏼🧓🏼但是并没有触发 memo_getProductName
 */

const Example = (props) => {
    const [price, setPrice] = useState(0)
    const [name, setName] = useState('apple')
    
    
    function getProductName() {
        console.log('getProductName触发')
        return name
    }
    // 只对name响应
    useEffect(() => {
        console.log('name effect 触发')
        getProductName()
    }, [name])
    
    // 只对price响应
    useEffect(() => {
        console.log('price effect 触发')
    }, [price])
  
    // memo化的getProductName函数   🧬🧬🧬
    const memo_getProductName = useMemo(() => {
        console.log('name memo 触发')
        return () => name  // 返回一个函数
    }, [name]);
    /**
     * 从这里也可以看出，memo是在DOM更新前触发的，就像官方所说的，类比生命周期就是shouldComponentUpdate
     * 
     *  */ 


    return (
        <Fragment>
            <p>{name}</p>
            <p>{price}</p>
            <p>普通的name：{getProductName()}</p>
            <p>memo化的：{memo_getProductName ()}</p>
            <button onClick={() => setPrice(price+1)}>价钱+1</button>
            <button onClick={() => setName(nameList[Math.random() * nameList.length << 0])}>修改名字</button>
        </Fragment>
    )
}





















export default Example;