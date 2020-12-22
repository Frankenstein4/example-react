import React, { useState,createContext} from "react";
import Counter from './index1'


const myContext22 = createContext();//指的是下面花括号里面的myContext

function App() {
  const [count, setCount] = useState(0);
  const [val,setVal] = useState('true');
  return (
    <div>
      <h4>我是父组件</h4>
      <p>点击了 {count} 次!</p>
      <button
        onClick={() => {
          setCount(count + 1);
          let a = !val;
          setVal(a)
        }}
      >
        点我
      </button>

      {/* 关键代码 */}
      {/* 提供器 */}
      <myContext22.Provider value={count} >
        <Counter myContext11={myContext22} val={val} />
      </myContext22.Provider>
    </div>
  );
}
export default App;