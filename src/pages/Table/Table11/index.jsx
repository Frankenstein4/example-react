import React, { useState,createContext} from "react";
import Counter from './index1'


const myContext22 = createContext();//指的是myContext22.Provider（生产者）      传给子组件的其实是 myContext11 但因为myContext11是指向myContext22，故在子组件中可以直接使用useContext

function App() {
  const [count, setCount] = useState(0);
  const [val,setVal] = useState('11');
  return (
    <div>
      <h4>我是父组件</h4>
      <p>点击了 {count} 次!</p>
      <button
        onClick={() => {
          setCount(count + 1);
          setVal('222')
        }}
      >
        点我
      </button>

      {/* 关键代码 */}
      {/* 提供器 */}
      <myContext22.Provider value={{count,val}} >
        <Counter myContext11={myContext22} val={val}  aa={val} />
      </myContext22.Provider>
    </div>
  );
}
export default App;