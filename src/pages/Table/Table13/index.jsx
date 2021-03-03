import React, { useState, Children } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, DatePicker, TimePicker, Select } from 'antd';


const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 182,
      tel: '0571-22098909',
      phone: 18889898989,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      tel: '0571-22098333',
      phone: 18889898888,
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 182,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jake White',
      age: 182,
      tel: '0575-22098909',
      phone: 1890001000211,
      address: 'London No. 2 Lake Park',
    },
    {
      key: '5',
      name: 'Jake White1',
      age: 182,
      tel: '0575-22098909',
      phone: 18900010002,
      address: 'Dublin No. 2 Lake Park',
    },
    {
        key: '6',
        name: 'Jake White',
        age: 181,
        tel: '0575-22098901',
        phone: 18900010002,
        address: 'Dublin No. 2 Lake Park',
    },
  ];


export   default function table13 () {





  const getRowSpans = (arr, key) => {
    let sameValueLength = 0;
    const rowSpans = [];
    for(let i = arr.length - 1; i >= 0; i--){
        if(i === 0) {
            rowSpans[i] = sameValueLength + 1;
            continue;
        }
        if(arr[i][key] === arr[i-1][key]) {
            rowSpans[i] = 0;
            sameValueLength++;
        } else {
            console.log(sameValueLength)
            rowSpans[i] = sameValueLength + 1;
            sameValueLength = 0;
        }
    }
    return rowSpans;
};



const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (value, _, index) => {
        const obj = {
          children: value,
          props: {},
        };
        const  rowSpans = getRowSpans(data, 'name')
        obj.props.rowSpan = rowSpans[index];
        return obj;
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    render: (value, _, index) => {
        const obj = {
          children: value,
          props: {},
        };
        const  rowSpans = getRowSpans(data, 'age')
        obj.props.rowSpan = rowSpans[index];
        return obj;
      },
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, _, index) => {
        const obj = {
          children: value,
          props: {},
        };
        const  rowSpans = getRowSpans(data, 'tel')
        obj.props.rowSpan = rowSpans[index];
        return obj;
      },
  },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: (value, _, index) => {
        const obj = {
          children: value,
          props: {},
        };
        const  rowSpans = getRowSpans(data, 'phone')
        obj.props.rowSpan = rowSpans[index];
        return obj;
      },
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];




return (
    <Table columns={columns} dataSource={data} bordered />
)



}
