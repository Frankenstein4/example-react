import React, { useState } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import { bgBlack } from 'chalk';


const defaultData = [];
for (let i = 0; i < 100; i += 1) {
    defaultData.push({
        id: i,
        title: '活动名称' + i,
        decs: '这个活动真好玩',
        state: 'open',
        created_at: '2020-05-26T09:42:56Z',
    });
}

export default () => {
    const [editableKeys, setEditableRowKeys] = useState([]);
    const [dataSource, setDataSource] = useState(defaultData);
    const [position, setPosition] = useState('top');
    const [newRecord, setNewRecord] = useState({
        id: (Math.random() * 1000000).toFixed(0),
        decs: '随便'
    });

    

    const columns = [
        {
            title: '活动名称',
            dataIndex: 'title',
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: '此项为必填项',
                    },
                ],
            },
            // 第二行不允许编辑
            editable: (text, record, index) => {
                return index !== 1;
            },
            width: '30%',
        },
        {
            title: '状态',
            key: 'state',
            dataIndex: 'state',
            valueType: 'select',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                open: {
                    text: '未解决',
                    status: 'Error',
                },
                closed: {
                    text: '已解决',
                    status: 'Success',
                },
            },
        },
        {
            title: '描述',
            dataIndex: 'decs',
            fieldProps: (from, { rowKey }) => {
                if (from.getFieldValue([rowKey || '', 'title']) === '不好玩') {
                    return {
                        disabled: true,
                    };
                }
                return {};
            },
        },
        {
            title: '操作',
            valueType: 'option',
            width: 200,
            render: (text, record, _, action) => [
                <a key="editable" onClick={() => {
                    console.log('=====action', action);
                    var _a;
                    (_a = action.startEditable) === null || _a === void 0 ? void 0 : _a.call(action, record.id);
                }}>
                    编辑
          </a>,
            ],
        },
    ];







    const add = () => {
        return {
            id: (Math.random() * 1000000).toFixed(0),
            decs: '随便'
        }

    }



    const dataArr = record => {

        const newData = [...dataSource];
        const index = newData.findIndex(item => record.id === item.id);
        if (index > -1) {//编辑时候
            const item = newData[index];
            newData.splice(index, 1, { ...item, ...record });
            setDataSource(newData);
        }else{
            if (record.title == '222') {
                newData.push(record);
                setDataSource(newData);
            }else{
                setDataSource(newData);
            }
        }  

    }




    return (<div>
        <EditableProTable rowKey="id" headerTitle="可编辑表格" 
            recordCreatorProps={{
            position,
            record: add()
            }}
            columns={columns}
            request={(params, sort, filter) => {
                return {
                    data: dataSource,
                    //total: defaultData.length,//这里会默认写死表格总数据,不建议在request限定
                    success: true,
                }
            }}
            pagination={{
                showSizeChanger: true,
                showQuickJumper: true,
                position: ["bottomCenter"],
                size: 'small',
                defaultPageSize: 10
            }}
            value={dataSource}
            editable={{
                editableKeys,
                onSave: async (k, r) => {
                    dataArr(r)
                },
                onChange: setEditableRowKeys,
            }} />
    </div>);
};