import React, { useState,useEffect } from 'react';
import { TreeSelect } from 'antd';


export default function TreeTable(){



const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
  },
];




  const [value,setValue] = useState(undefined);

 const onChange = value => {
    console.log(value);
    setValue(value);
  };


    return (
      <TreeSelect
        style={{ width: '100%' }}
        value={value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
        onChange={onChange}
      />
    );




}