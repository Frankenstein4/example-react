import React, { useState } from 'react';
import { EditableProTable } from '@ant-design/pro-table';
import ProField from '@ant-design/pro-field';
import { ProFormRadio } from '@ant-design/pro-form';
import ProCard from '@ant-design/pro-card';
import { Button } from 'antd';
import { bgBlack } from 'chalk';
const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
const defaultData = [
    /* {
        id: 624748504,
        title: '活动名称一',
        decs: '这个活动真好玩',
        state: 'open',
        created_at: '2020-05-26T09:42:56Z',
    },
    {
        id: 624691229,
        title: '活动名称二',
        decs: '这个活动真好玩',
        state: 'closed',
        created_at: '2020-05-26T08:19:22Z',
    }, */
];
for (let i = 0; i < 100; i += 1) {
    defaultData.push({
        id: i,
        title: '活动名称' + i,
        decs: '这个活动真好玩',
        state: i%2==0?'closed':'open',
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
        <EditableProTable rowKey="id" headerTitle="可编辑表格" /* maxLength={5} */ recordCreatorProps={{
            position,
            //record: newRecord,
            record: add()
        }}
            /* toolBarRender={() => [
                <ProFormRadio.Group key="render" fieldProps={{
                    value: position,
                    onChange: (e) => setPosition(e.target.value),
                }} options={[
                    {
                        label: '添加到顶部',
                        value: 'top',
                    },
                    {
                        label: '添加到底部',
                        value: 'bottom',
                    },
                ]}/>,
            ]}  */
            columns={columns}
            /* request={async () => ({
                data: defaultData,
                //total: defaultData.length,//这里会默认写死表格总数据,不建议在request限定
                success: true,
            })}  */
            request={(params, sort, filter) => {
                // console.log(defaultData);
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
            /* onChange={(k) => {
                const arr = [...dataSource];
                setDataSource(defaultData);
            }} */
            editable={{
                editableKeys,
                onSave: async (k, r) => {
                    //await waitTime(2000);
                    // setNewRecord({
                    //     id: (Math.random() * 1000000).toFixed(0),
                    // });
                    dataArr(r)
                },
                onChange: setEditableRowKeys,
            }} />
        {/* <ProCard title="表格数据" headerBordered collapsible defaultCollapsed>
        <ProField fieldProps={{
        style: {
            width: '100%',
        },
    }} mode="read" valueType="jsonCode" text={JSON.stringify(dataSource)}/>
      </ProCard> */}
    </div>);
};