import React, { useState, useEffect } from 'react';
import {DownOutlined,CloseCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import AuthorizedButton from '@/components/Authorized/AuthorizedButton';
import './style.less';
export default function TreeTable() {
  const treeData = [
    {
      title: 'Node1',
      value: 'Tree',
      isCheck:false,
      isLook:false,
      isShow:true,
      children: [
        {
          title: 'Child Node1',
          value: 'Tree-1',
          isCheck:false,
          isLook:false,
          isShow:true,
        },
        {
          title: 'Child Node2',
          value: 'Tree-2',
          isCheck:false,
          isLook:false,
          isShow:true,
          children: [
            {
              title: 'Child Node1',
              value: 'Tree-2-1',
              isCheck:false,
              isLook:false,
              isShow:true,
              children: [
                {
                  title: 'Child Node1',
                  value: 'Tree-2-1-1',
                  isCheck:false,
                  isLook:false,
                  isShow:true,
                },
                {
                  title: 'Child Node2',
                  value: 'Tree-2-1-2',
                  isCheck:false,
                  isLook:false,
                  isShow:true,
                },
              ],
            },
            {
              title: 'Child Node2',
              value: 'Tree-2-2',
              isCheck:false,
              isLook:false,
              isShow:true,
            },
          ],
        },
      ],
    },
    {
      title: 'Node2',
      value: 'table',
      isCheck:false,
      isLook:false,
      isShow:true,
      children: [
        {
          title: 'Child Node1',
          value: 'table-1',
          isCheck:false,
          isLook:false,
          isShow:true,
        },
        {
          title: 'Child Node2',
          value: 'table-2',
          isCheck:false,
          isLook:false,
          isShow:true,
        },
      ],
    },
    {
        title: 'Node3',
        value: 'echarts',
        isCheck:false,
        isLook:false,
        isShow:true,
    },
  ];

  const [isShow,setShow] = useState(true);
  const [clickId,setClickId] = useState('');
  const [treeArray,setTreeArray] = useState([...treeData]);
  const [data,setData] = useState([]);

  useEffect(() => {
  
  }, []);



//折叠
 const  collapsedHandler = (item)=> {
    /*  let show = !isShow;
     let arr = treeArray;
     setShow(show);
     setClickId(item.value);
     setTreeArray(arr); */
     if(item.children&&item.children.length>0){
        let arr = traverseTreeArray(treeArray,item.value,item.isShow,'isShow');
        setTreeArray([...arr]);
     }
}


//set
const checkSetHandler = (item) => {
        let arr = traverseTreeArray(treeArray,item.value,item.isCheck,'isCheck');
        setTreeArray([...arr]);
}


//look
const checkLookHandler = (item) => {
    let arr = traverseTreeArray(treeArray,item.value,item.isLook,'isLook');
    setTreeArray([...arr]);
}

//遍历数组
const  traverseTreeArray = (menus,val,pick,tag) => {
    menus.forEach((item) => {
        const { upValue,children,value } = item;
       /*  if(value.split('-').includes(val.split('-')[0])){
            item[tag] = !pick
        }else if(val===value){
            item[tag] = !pick
        } */
        if(val===value){
            item[tag] = !pick 
            if(children){
                traverseTree(children,val,pick,tag)
            }
        }
        children && children.length > 0 ? (item.children = traverseTreeArray(children,val,pick,tag)) : null;
    });
    return menus;
};


//接着遍历
const  traverseTree = (menus,val,pick,tag) => {
    //console.log('=========此处的menus',menus)
    menus.forEach((item) => {
        const { upValue,children,value } = item;
        item[tag] = !pick
        children && children.length > 0 ? (item.children = traverseTree(children,val,pick,tag)) : null;
        });
    return menus;
};


//提交
const clickHandler =() => {
    console.log('最终整个数组是：=========',treeArray)
}
  const renderNode = (data) => {
    return data.map((item) => {
      return (
        <li key={item.value}>
          <div className={`iconfont collapsed`}>
            <div><DownOutlined onClick={() => collapsedHandler(item)} />{item.value}</div>
            <div className={`collapsed_t`}>
                <span className={item.isCheck?'collapsed_span_check collapsed_span':'collapsed_span'} onClick={() => checkSetHandler(item)}>set</span>
                <span className={item.isLook?'collapsed_span_check collapsed_span':'collapsed_span'} onClick={() => checkLookHandler(item)}>look</span>
            </div>
          </div>
          <ul /* hidden={!isShow&&clickId===item.value} */ hidden={!item.isShow}>{item.children ? renderNode(item.children) : ''}</ul>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderNode(treeArray)}</ul>
      <button onClick={() => clickHandler()}>提交</button>
      <AuthorizedButton
        authority={[32]}
        /* noMatch={
          <Tooltip title="取消">
            <CloseCircleOutlined style={{ color: 'grey', fontSize: '20px' }} />
          </Tooltip>
        } */
      >
        <Tooltip title="取消">
          <CloseCircleOutlined style={{ color: 'red', fontSize: '20px' }} />
        </Tooltip>
      </AuthorizedButton>
    </div>
  );
}
