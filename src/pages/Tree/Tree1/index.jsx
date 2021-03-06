import { Tree } from 'antd';
import React, {createContext, useContext, useEffect, useState} from "react";
import { DownOutlined } from '@ant-design/icons';
import {history} from 'umi';

import style from './style.less';

import Tree1 from '../Tree2/index';

const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      children: [
        {
          title: 'parent 1-0',
          key: '0-0-0',
          children: [
            {
              title: 'leaf',
              key: '0-0-0-0',
            },
            {
              title: 'leaf',
              key: '0-0-0-1',
            },
            {
              title: 'leaf',
              key: '0-0-0-2',
            },
          ],
        },
        {
          title: 'parent 1-1',
          key: '0-0-1',
          children: [
            {
              title: 'leaf',
              key: '0-0-1-0',
            },
          ],
        },
        {
          title: 'parent 1-2',
          key: '0-0-2',
          children: [
            {
              title: 'leaf',
              key: '0-0-2-0',
            },
            {
              title: 'leaf',
              key: '0-0-2-1',
            },
          ],
        },
      ],
    },
  ];

  const aa = [
    {
        id: 11,
        userId: 208,
        upstreamLevelId: 222,
        levelName: "此账户",
        enableAlarm: true,
        enableCascadingAlarm: false,
        path: "此账户",
        onlineBoxCount: 0,
        offlineBoxCount: 0,
        connectedInterconnectionCount: 0,
        disconnectedInterconnectionCount: 0,
        boxCount: 0,
        subUserList: [
        6
        ],
        children: null
        },
    {
    id: 1,
    userId: 208,
    upstreamLevelId: 0,
    levelName: "此账户",
    enableAlarm: true,
    enableCascadingAlarm: false,
    path: "此账户",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [
    6
    ],
    children: null
    },
    {
    id: 15,
    userId: 208,
    upstreamLevelId: 1,
    levelName: "上海",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/上海",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 16,
    userId: 208,
    upstreamLevelId: 15,
    levelName: "华东",
    enableAlarm: true,
    enableCascadingAlarm: false,
    path: "此账户/上海/华东",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 19,
    userId: 208,
    upstreamLevelId: 1,
    levelName: "北京",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/北京",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 25,
    userId: 208,
    upstreamLevelId: 19,
    levelName: "B区",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/北京/B区",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 29,
    userId: 208,
    upstreamLevelId: 19,
    levelName: "D区",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/北京/D区",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 36,
    userId: 208,
    upstreamLevelId: 19,
    levelName: "E区",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/北京/E区",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 39,
    userId: 208,
    upstreamLevelId: 1,
    levelName: "浙江",
    enableAlarm: true,
    enableCascadingAlarm: false,
    path: "此账户/浙江",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    },
    {
    id: 40,
    userId: 208,
    upstreamLevelId: 39,
    levelName: "west",
    enableAlarm: false,
    enableCascadingAlarm: false,
    path: "此账户/浙江/west",
    onlineBoxCount: 0,
    offlineBoxCount: 0,
    connectedInterconnectionCount: 0,
    disconnectedInterconnectionCount: 0,
    boxCount: 0,
    subUserList: [ ],
    children: null
    }
    ];

const Demo = () => {


    const {DirectoryTree} = Tree;
    const [areaTree, setAreaTree] = useState(null);
    const [nr, setNr] = useState('全部');

    const [switchId,setswitchId] = useState('1');//根据id切换右边组件

useEffect(()=>{

    console.log(aa)
    tree();

    

},[]);




const tree = () =>{

    /* let arr = [];
    aa.map(item=>{
        if(item.upstreamLevelId == 0) {
            item[`title`] = '全部区域';
            item[`key`] = item.id;
            arr.push(item);
            getChildren(aa,arr);
        }
    })

    setAreaTree(arr); */


    getTreeDate(aa);

}



function getTreeDate(arr) {
    function getTree(treeArr, treeItem) {
        for (let i = 0; i < arr2.length; i++) {
            if (arr2[i].upstreamLevelId == treeItem.key) {
                let tmp = { "title": arr2[i].levelName, "key": arr2[i].id, "children": [] };
                treeItem.children.push(tmp)
                getTree(treeArr, tmp);
                let tmp1 = arr2.splice(i, 1);
                i--;
                //console.log(tmp1);
            }
        }
    }
    const queue = [...arr];
    var arr2 = queue.sort((o1, o2) => { return o1.id - o2.id });  // 浅拷贝一份，不然在做队列操作时会影响原数据
    //var arr2 = arr.sort((o1, o2) => { return o1.id - o2.id });
    //console.log(arr2)
    var treeArr = [];
    while (arr2.length > 0) {
        let frist = arr2.shift();
        let tmp = { "title": frist.levelName, "key": frist.id, "children": [] };
        treeArr.push(tmp);
        getTree(treeArr, tmp);
    }
    //return treeArr;
    console.log('==========树',treeArr);
    setAreaTree(treeArr);
  }



const getChildren = (tree,arr)=>{
    if(arr.length>0){
    arr.map(item=>{
        item.children = [];
        tree.map(i=>{
            if(item.id == i.upstreamLevelId){
                i[`title`] = i.levelName;
                i.key = i.id;
                item.children.push(i);
                getChildren(tree,item.children);
            }
        })
    })
  }
}




  const onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    setswitchId(selectedKeys);
    sessionStorage.setItem('item','测试');
  };

  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

 const useCoupon = ()=>{
    console.log(444444);
};


const history_on = ()=>{
    history.push({
        pathname: '/Component/Comp15',
      });
}


  return (
  <div className={style.bg}>
        <div className={style.bg_tree}>
            {
                areaTree && areaTree.length > 0 ?   <DirectoryTree className={style.tree}
                defaultExpandedKeys={[areaTree[0].key]}
                defaultSelectedKeys={[areaTree[0].key]}
                defaultExpandAll={true}
                switcherIcon={<DownOutlined />}
                onSelect={onSelect}
                showIcon={true}
                treeData={areaTree}
              /> :''
            }
          

        </div>
        <div className={style.bg_table}>
            {
              switchId == 1 ? <Tree1 onClick={useCoupon} /> :
              switchId == 15 ? <div onClick={history_on}>上海</div> :
              <div>222</div>
            }

        </div>
  </div>
  )
};

export default Demo;