import React, { useContext, useEffect,useState,useRef} from 'react';

function useCurrentValue(value) {
    //const ref = useRef(0);
    const ref = useRef(value);
    useEffect(() => {
      ref.current = value;
    }, [value]);
  
    return ref;
  }
  


export default function Counter() {
  const [count, setCount] = useState(0);
  const currentCount = useCurrentValue(count);


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