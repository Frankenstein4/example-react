
import React, { useState,useEffect } from 'react';
import { Transfer, Tree,DatePicker,Tag,Tooltip } from 'antd';
import moment from 'moment';
import { setAuthority } from '@/utils/authority';
import './style.less';
const tagsData = ['Movies', 'Books', 'Music', 'Sports'];
export default function Tree1() {
    const { CheckableTag } = Tag;

    const [selectedTags,setselectedTags] = useState([''])

    useEffect(()=>{
       
    },[])

 
    const treeData = [
      {
        title: 'parent 1',
        key: '0-0',
        isLeaf: true,
        children: [
          {
            title: (
                   <Tooltip title="Tooltip will show on mouse enter.">
                        <div className={`treeBoxSpan`}>
                        <span className={`spanIcon`}>全</span>
                        <span>Tooltip will...</span>
                        </div>
                   </Tooltip>
              ),
            key: '0-0-0',
            isLeaf: true,
            children: [
              {
                title: 'leaf',
                key: '0-0-0-0',
                isLeaf: true,
              },
              {
                title: 'leaf',
                key: '0-0-0-1',
                isLeaf: true,
              },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            isLeaf: true,
            children: [
              {
                title: (
                  <div
                    style={{
                      color: '#1890ff',
                      display:'flex'
                    }}
                  >
                    <span>改造</span>
                    <div style={{marginLeft:'20px'}}>
                        <span style={{marginRight:'10px'}}>
                        <CheckableTag
                            key={'查看'}
                        >
                            查看
                        </CheckableTag>
                        </span>
                        <span>
                        <CheckableTag
                            key={'设置'}
                            onChange={checked => handleChange('设置', checked)}
                            checked={selectedTags.indexOf('设置') > -1}
                        >
                            设置
                        </CheckableTag>
                        </span>
                    </div>
                  </div>
                ),
                key: '0-0-1-0',
                isLeaf: true,
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
        };
      
       const handleChange = (tag, checked)=> {
            console.log(checked)
            setAuthority([30,104])
            checked ? setselectedTags(['设置']) : setselectedTags(['']) ; 
          }

          const onExpand = () => {
            console.log('Trigger Expand');
          };
return (
    <div style={{background:'#fff'}}>
        <Tree
      //checkable
      multiple
      defaultExpandedKeys={['0-0-0', '0-0-1']}
      /* defaultSelectedKeys={['0-0-0', '0-0-1']} */
      defaultCheckedKeys={['0-0-0', '0-0-1']}
      onSelect={onSelect}
      onCheck={onCheck}
      onExpand={onExpand}
      treeData={treeData}
    />
    <div>
   
    </div>
    </div>
)



}