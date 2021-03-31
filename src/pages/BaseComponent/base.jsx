import React, { useContext, useEffect, memo,useState } from 'react';

import { MyContext } from '../../utils/context-manager';
import { fetchProfileData } from "../Component/Comp8/fakeApi";

/* export default memo((props = {}) => {
    const { setStep, setNumber, setCount, fetchData } = useContext(MyContext);

    useEffect(() => {
        fetchData().then((res) => {
            console.log(`FETCH DATA: ${res}`);
        })
    }, []);

    return (
        <div>
            <p>step is : {props.step}</p>
            <p>number is : {props.number}</p>
            <p>count is : {props.count}</p>
            <hr />
            <div>
                <button onClick={() => { setStep(props.step + 1) }}>step ++</button>
                <button onClick={() => { setNumber(props.number + 1) }}>number ++</button>
                <button onClick={() => { setCount(props.step + props.number) }}>number + step</button>
            </div>
        </div>
    );
}); */

const resource = fetchProfileData();

const  memoApp = (context)=>{
    
    const { setStep, setNumber, setCount, fetchData } = useContext(MyContext);

    useEffect(() => {
        fetchData().then((res) => {
            console.log(`FETCH DATA: ${res}`);
        })
    }, []);

    const [user,setuser] = useState(resource.user.read()); 

    return (
        <div>
            <h1>{user.name}</h1>
            <p>step is : {context.step}</p>
            <p>number is : {context.number}</p>
            <p>count is : {context.count}</p>
            <hr />
            <div>
                <button onClick={() => { setStep(context.step + 1) }}>step ++</button>
                <button onClick={() => { setNumber(context.number + 1) }}>number ++</button>
                <button onClick={() => { setCount(context.step + context.number) }}>number + step</button>
            </div>
        </div>
    );
}

export default memoApp;