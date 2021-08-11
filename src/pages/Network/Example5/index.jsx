import React, { useEffect, useState } from "react";
import { Cascader } from 'antd';
import provinces  from "@/utils/Provinces";
//import {options as provinces} from  "@/utils/Provinces";
export default function AA(){


      
      function onChange(value) {
        console.log(value);
      }
      

    return (
        <div>
             <Cascader
    options={provinces}
    onChange={onChange}
  />
          </div>
      )
   
}