import React, { useContext, memo } from 'react';

import { MyContext } from '../../../utils/context-manager';

export default memo((props = {}) => {
    //const { dispatch,step, number, count } = useContext(MyContext);

    const { dispatch,state } = useContext(MyContext);
    return (
        <div>
            {/* <p>step is : {props.step}</p>
            <p>number is : {props.number}</p>
            <p>count is : {props.count}</p> */}
            {/* <p>step is : {step}</p>
            <p>number is : {number}</p>
            <p>count is : {count}</p> */}
            {console.log('会一直打印吗？？？？？')}
            <p>step is : {state.step}</p>
            <p>number is : {state.number}</p>
            <p>count is : {state.count}</p>
            <hr />
            <div>
                <button onClick={() => { dispatch({ type: 'stepInc',num:9 }) }}>step ++</button>
                <button onClick={() => { dispatch({ type: 'numberInc' }) }}>number ++</button>
                <button onClick={() => { dispatch({ type: 'count' }) }}>number + step</button>
            </div>
        </div>
    );
});