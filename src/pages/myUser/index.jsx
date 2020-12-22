import React, { useState, useEffect } from 'react';
import { Table } from 'antd';

import request from '../../utils/request'


export default function UserList() {

    const [data, setAccount] = useState("");
    useEffect(() => {
        //请求接口数据
        const token = window.sessionStorage.getItem('token');

        request('/devApi/users', {
            method: 'get',
            params: {
                query: '',
                pagenum: 1,
                pagesize: 2
            },
            headers: {
                Authorization: token
            }
        })
            .then(function (response) {
                console.log(response);
                const userArray = response.data.users

               const userlist = userArray.map((item, index) => {
                  return  {...item,key:index}
                })

                setAccount(userlist);//这里用 hook 就挺好的
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])





    const columns = [
        {
            title: '序号',
            dataIndex: "key",
            width: 150,
        },
        {
            title: '姓名',
            dataIndex: 'username',
            width: 150,
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            width: 150,
        },
        {
            title: '电话',
            dataIndex: 'mobile',
            width: 150,
        },
        {
            title: '角色',
            dataIndex: 'role_name',
            width: 150,
        },
        {
            title: '状态',
            dataIndex: 'mg_state',
            width: 150,
        },
        {
            title: '操作',
            dataIndex: '',
        },
    ];

    /*  const data = [];
     for (let i = 0; i < 100; i++) {
       data.push({
         key: i,
         name: `Edward King ${i}`,
         age: 32,
         address: `London, Park Lane no. ${i}`,
       });
     } */



    return (
        <div>
            <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
        </div>
    )





}

