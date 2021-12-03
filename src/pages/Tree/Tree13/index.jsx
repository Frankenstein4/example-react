
import React, { useState,useEffect } from 'react';
import { Transfer, Tree,DatePicker, Button } from 'antd';

import moment from 'moment';

import autherList from './dataMenu';

//import dataTree from './dataMenu';

import { setAuthority } from '@/utils/authority';


export default function Tree1() {
    const [cc,setcc] =useState([]);
    const [data,setData] = useState([...autherList.memu]);
    const [listArr,setListArr] = useState([]);
    useEffect(()=>{
        setcc([10000,10001]);
        console.log(autherList);
    },[])

    const treeData = [
      {
        title: '监控管理',
        key: '0-0',
        children: [
          {
            title: '采集管理',
            key: '0-0-0',
            children: [
              {
                title: '采集任务',
                key: '0-0-0-0',
              },
              {
                title: 'leaf',
                key: '0-0-0-1',
                children: [
                    {
                      title: '任务管理',
                      key: '0-0-0-1-0',
                    },
                    {
                      title: 'leaf',
                      key: '0-0-0-1-1',
                    },
                  ],
              },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [
              {
                title: (
                  <span
                    style={{
                      color: '#1890ff',
                    }}
                  >
                    sss
                  </span>
                ),
                key: '0-0-1-0',
              },
            ],
          },
        ],
      },
    ];



    




    
  

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
        setcc(checkedKeys);
        const treeList = checkedKeys.concat(info.halfCheckedKeys);
        console.log(treeList);
        setAuthority(treeList)
        /* function getArrEqual(arr1, arr2) {
            let newArr = [];
            for (let i = 0; i < arr2.length; i++) {
                for (let j = 0; j < arr1.length; j++) {
                    if(arr1[j].key === arr2[i]){
                        newArr.push(arr1[j]);
                    }
            }
         }
         return newArr;
       }
       console.log(getArrEqual(autherList.aHorizontalMenu, treeList)); */

      const aa =  autherList.aHorizontalMenu.filter(function(item){
        return treeList.indexOf(item.key) != -1;
      })  
      console.log(aa);
      setListArr([...aa])

      // const aa = getArrEqual(autherList.aHorizontalMenu, treeList);

      /*  function  getmenu (aa, parentId) {
        var treeArr = [];
        for (var i = 0; i < aa.length; i++) {
          var node = aa[i];
          if (node.parentId == parentId) {
            var newNode = { ...node, children: getmenu(aa, node.key) };
            treeArr.push(newNode);
          }
        }
        return treeArr;
      };
      console.log(getmenu(aa,null)); */
      };


//
const ClickList = ()=>{
    function  getmenu (aa, parentId) {
        var treeArr = [];
        for (var i = 0; i < aa.length; i++) {
          var node = aa[i];
          if (node.parentId == parentId) {
            var newNode = { ...node, children: getmenu(aa, node.key) };
            treeArr.push(newNode);
          }
        }
        return treeArr;
      };
      console.log(getmenu(listArr,null));
}


return (
    <div style={{background:'#fff'}}>
        <Tree
      checkable
      defaultExpandAll
      checkedKeys={cc}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={data}
      //checkStrictly={true}
    />
    <Button  onClick={()=>ClickList()}>提交</Button>
    </div>
)



}