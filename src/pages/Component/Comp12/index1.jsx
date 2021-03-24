import React, { useContext, useEffect,useState,useRef} from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const currentCount = useRef(count);

  useEffect(() => {
    currentCount.current = count;
    //useEffect 是处理副作用的，其执行时机在 每次 Render 渲染完毕后，换句话说就是每次渲染都会执行，只是实际在真实 DOM 操作完毕后。此时useEffect还没有第二个参数🎃🎃🎃🎃 当第二个参数为 [] 时，useEffect 仅在初始化执行一次，后续的 Rerender 永远也不会被执行。
  });

  const log = () => {
    setCount(count + 1);
    setTimeout(() => {
      console.log(currentCount.current);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={log}>Click me</button>
    </div>
  );
}



function Counter() {
    const [count, setCount] = useState(0);
  
    const log = () => {
      setCount(count + 1);//这是是更新了值
      //但由于对 state 的读取没有通过 this. 的方式，使得 每次 setTimeout 都读取了当时渲染闭包环境的数据，虽然最新的值跟着最新的渲染变了，但旧的渲染里，状态依然是旧值。  第一次点击，共渲染了 2 次，setTimeout 生效在第 1 次渲染，此时状态为：
      setTimeout(() => {
        console.log(count);//但是这里并没有得到这个更新的值，还是上一个旧值
      }, 3000);
    };
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={log}>Click me</button>
      </div>
    );
  }
  
