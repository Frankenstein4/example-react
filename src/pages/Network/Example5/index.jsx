import React, { useEffect, useState } from "react";
import { Cascader } from 'antd';

export default function AA(){

    const options = [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ];
      
      function onChange(value) {
        console.log(value);
      }
      

    return (
        <div>
             <Cascader
    defaultValue={['zhejiang', 'hangzhou', 'xihu']}
    options={options}
    onChange={onChange}
  />
          </div>
      )
   
}