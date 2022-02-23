
import React, { useState,useEffect } from 'react';
import secret  from '@/utils/secret';



export default function Tree1(aa){


useEffect(()=>{
    console.log(secret.Encrypt('年纪大'),typeof 10010);
    console.log(secret.Decrypt('9D3D7BF7713EA6A0116237B8FCC848EE'),typeof secret.Decrypt('9D3D7BF7713EA6A0116237B8FCC848EE'));
},[])

    return (
        <div onClick={aa.onClick}>
            这是全部
        </div>
    )
}