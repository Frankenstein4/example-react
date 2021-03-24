import React, { useContext, useEffect,useState} from 'react';



/* export default function Counter() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  } */
  









/* export default function Counter() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      const id = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(id);
    }, [count]);
  
    return <h1>{count}</h1>;
  } */







  export default function Counter() {
    const [count, setCount] = useState(0);
  
    const log = () => {
      setCount(count + 1);
      setTimeout(() => {
        console.log(count);
      }, 3000);
    };

    /* 
    setTimeout 都读取了当时渲染闭包环境的数据，虽然最新的值跟着最新的渲染变了，但旧的渲染里，状态依然是旧值。
    
    */
  
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={log}>Click me</button>
      </div>
    );
  }
  











 /*  class Counter extends React.Component {
    state = { count: 0 };
  
    log = () => {
      this.setState({
        count: this.state.count + 1
      });
      setTimeout(() => {
        console.log(this.state.count);
      }, 3000);
    };
  
    render() {
      return (
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={this.log}>Click me</button>
        </div>
      );
    }
  }
  export default Counter; */
