import React, { useState,useEffect } from 'react';
import { Select } from 'antd';

const data = [];
// let pageSize = 100,scrollPage = 1,keyWords = '',optionData = [];
for (let i = 0; i < 100; i++) {
 data.push(`test${i}`);
}

export default function TreeTable(){

    const { Option } = Select;
    const [page,setPage] = useState(0);
    const [dataArr,setDataArr] = useState(data.slice(page,10))

    return (
     
        <Select 
        placeholder="请输入关键字" 
        showSearch
        style={{width:'300px'}}
        filterOption={false}
        onPopupScroll={(e)=>{
                 const { target } = e;
                 // target.scrollTop + target.offsetHeight === target.scrollHeight  判断是否滑动到底部
                  if( target.scrollTop + target.offsetHeight === target.scrollHeight){
                      // 在这里调用接口 
                      let num = page;
                      num = page + 1;
                      let arr = data.slice(10*num,10*(num+1));
                      const aa = dataArr.concat(arr);
                      setDataArr(aa);
                      setPage(num);
                   }
           }}
        onSearch={val=>{
            console.log(val);
            if(val){
                 let  newSelArray = data.filter(i=>{
                  return i.includes(val);
               })
               setDataArr(newSelArray);
            }else{
                let arr = data.slice(0,10);
                setDataArr(arr);
                setPage(0)
            }
           
        }}
     >
           {dataArr.map(item => (
         <Option value={item} key={item}>{item}</Option>
       ))}
     </Select>
    );




}