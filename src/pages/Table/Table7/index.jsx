import { Input, Button } from 'antd';
import React, { useEffect, useState,useRef } from "react";
import { BankTwoTone } from '@ant-design/icons';

export default function Table7(){

    const currenRef = useRef(9999) 

    const accountChange = event => {
        console.log(event.target.value);
        currenRef.current = event.target.value;
      };

const btn = ()=>{
    console.log(currenRef.current)
}

return (
    <div>
        <Button onClick={()=>btn()}>点击</Button>
        <Input    onBlur={accountChange}/>
    </div>
    )
}

