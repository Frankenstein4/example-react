import React, {useEffect, useState} from "react";
import {Button, Form, Input, Table} from 'antd';
import  {UploadOutlined,SearchOutlined} from "@ant-design/icons";



export default function Index (){

 //搜索功能
 const [searchText, setSearchText] = useState("");
 const [searchedColumn, setSearchedColumn] = useState("");
 const {Search} = Input;

 const [aa,setaa] = useState(new Map());

 const [cc,setcc] = useState(null);



 var searchInput;
  //筛选功能！ ↓
  const getColumnSearchProps = dataIndex => ({

    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
      <div style={{padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => {
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{width: 230, marginBottom: 0, display: 'block'}}
        />
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: text =>
      setSearchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


    //去搜索！
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      /*第一种方案 失效的。用第二种设置setSelectedKey的方法，可以实现*/
      confirm();
      setSearchText(selectedKeys[0]);
      setSearchedColumn(dataIndex);
    };
    //重置搜索框
    const handleReset = (clearFilters) => {
      clearFilters();
      setSearchText("");
    };

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    shouldCellUpdate:false
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    shouldCellUpdate:false,
    ...getColumnSearchProps('age'),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    shouldCellUpdate:false
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    shouldCellUpdate:false,
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: 2,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  {
    key: 3,
    name: 'Not Expandable',
    age: 29,
    address: 'Jiangsu No. 1 Lake Park',
    description: 'This not expandable',
  },
  {
    key: 4,
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
  },
];




return (
  <div>
      <Table
    columns={columns}
    expandable={{
      onExpand:(status,record)=>{
        if(status){
        /* let arr = aa;
        //取数据
        arr.set(record.key,record);
        setaa(arr);
        console.log(arr,record.key); */
        setcc(record);
        }
      },
      expandedRowRender: record => {
        
       /*  if(aa==record.key){
          console.log(record.name);
        } */

        
        /* let arr = aa;
        let  tmp = arr.get(record.key)
        console.log(tmp.name); */
        let aa = cc ;
        return <p style={{ margin: 0 }}>{aa.name}</p>
      },
      rowExpandable: record => record.name !== 'Not Expandable',
    }}
    dataSource={data}
    bordered
  />
  </div>
)

}

