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
      phone: 18900010002,
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



const renderContent = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  return obj;
};

  // 计算合并行数         这个方法不对
 const getMergeRowNum = (col_name, row, dataSource, compare_col_name = null) => {
    const temp = {};
    let n = 0;
    if (col_name !== temp[col_name]) {
      temp[col_name] = row[col_name];

      dataSource.forEach((e) => {
        if (compare_col_name !== null) {
          if (e[col_name] === temp[col_name] && e[compare_col_name] === row[compare_col_name]) {
            console.log(e[col_name], temp[col_name])
            n += 1;
          }
        } else {
          if (e[col_name] === temp[col_name]) {
            console.log(e[col_name], temp[col_name])
            n += 1;
          }
        }
      })
    }
    console.log(col_name + '=' + temp[col_name] + '合作行数', temp, n)
    return n
  }







const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, row, index) => {
      // if (index < 4) {
      //   return <a>{text}</a>;
      // }
      return {
        children: <a>{text}</a>,
        props: {
          // colSpan: 5,
        },
      };
    },
  },
  {
    title: 'Age',
    dataIndex: 'age',
    //render: renderContent,
  },
  {
    title: 'Home phone',
    colSpan: 2,
    dataIndex: 'tel',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };

      // 与上一行不同，计算行数
      if ((index > 0 && row.tel !== data[index - 1].tel) || index === 0) {
        obj.props.rowSpan = getMergeRowNum('tel', row, data);
      } else {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  {
    title: 'Phone',
    colSpan: 0,
    dataIndex: 'phone',
    render: (value, row, index) => {
      const obj = {
        children: value,
        props: {},
      };

      // 与上一行不同，计算行数
      if ((index > 0 && row.phone !== data[index - 1].phone) || index === 0) {
        obj.props.rowSpan = getMergeRowNum('phone', row, data);
      } else {
        obj.props.rowSpan = 0;
      }
      return obj;
    },
  },
  {
    title: 'Address',
    dataIndex: 'address',
    // render: renderContent,
  },
];




return (
    <Table columns={columns} dataSource={data} bordered />
)



}
