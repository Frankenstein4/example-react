import React, { useState, Children } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, DatePicker, TimePicker, Select } from 'antd';
import moment, { months } from 'moment';
import { OrderedListOutlined } from '@ant-design/icons';
import { render } from 'enzyme';
import renderAuthorize from '@/components/Authorized/renderAuthorize';



export default function EditableTable (){


    const originData = [];

for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
    sel: 'sese',
    date1: '2020-07-29',
    validate: `1234`,
    //date1: moment('2020-07-29', 'yyyy-MM-DD')
  });
}

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  var formItem = <Form.Item
                      name= {dataIndex}
                      style={{
                        margin: 0,
                      }}
                      rules={[
                        {
                          required: true,
                          message: `Please Input ${title}!`,
                        },
                      ]}
                    >
                <Input  style={{width:'100%'}} />
              </Form.Item>;
  if (dataIndex === 'b') {
    formItem = <Form.Item
              name= {dataIndex}
              style={{
                margin: 0,
              }}
              /* rules={[
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
                {
                  validator: orderSn,
                }
              ]} */
            > 
         <DatePicker style={{width:'100%'}}  onChange={changetime} />
          </Form.Item>;
  }
  if (dataIndex === 'sel') {
    formItem = <Form.Item
              name= {dataIndex}
              style={{
                margin: 0,
              }}
              rules={[
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
                {
                  validator: orderSn,
                }
              ]}
            > 
              <Select defaultValue="lucy" style={{width:'200px'}} allowClear>
                <Option value="lucy">Lucy11111111111111111</Option>
                <Option value="alen">alen</Option>
                <Option value="sese">sese</Option>
              </Select>
          </Form.Item>;
  }
  return (
    <td {...restProps}>
      {editing ? (
        <div>
        {formItem}
        </div>
      ) : (
        children
      )}
    </td>
  );
};

const cpeARR = [ { id: 26,
  ip: "172.31.0.81",
  name: "测试扫描服务",
  port: 21160,
  status: true,
  uuid: "1ef27af6-a512-4270-9b8c-a57c07f13b98"}];



/* const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = dataIndex === 'sel' ? <Select
  placeholder="请选择扫描服务"
  allowClear
  style={{width:'200px'}}
>
    {cpeARR.map(item => (<Option value={item.id}>{item.name}</Option>))}
</Select> : <Input  />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
             {
               required: true,
               message: `请输入${title}!`,
             }
           ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
          children
        )}
    </td>
  );
}; */


const changetime = (data,dataString) =>{
    console.log('====dataString',dataString);
    form.setFieldsValue({
        b: moment(dataString,'YYYY-MM-DD')
      });
}


const orderSn = (rule, value, callback) => {
  callback()
}


  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = record => record.key === editingKey;

  const edit = record => {

    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      b: record.date2,
      ...record,
    });
    
    setEditingKey(record.key);
    
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);
      console.log('===========row',row);//row才是这一行修改的数据
      if (index > -1) {
        const item = newData[index];
        console.log(item)
        console.log(item.date2._i);
        item.date1=row.b._i;

        newData.splice(index, 1, { ...item, ...row });
        console.log('============index',newData[index]);
        setData(newData);
        setEditingKey('');
      } else {
         
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      editable: true,
    },
    {
      title: 'sel',
      dataIndex: 'sel',
      editable: true,
    },
    {
      title: 'validate',
      dataIndex: 'validate',
      editable: true,
    },
    {
      title: 'date1',
      dataIndex: 'b',
      editable: true,
      render: (text, record, index) => {
        const time = record.date1;
        record.date2 = moment(record.date1, 'YYYY-MM-DD');
        const editable = isEditing(record);
        console.log(record.date1);
        return editable ? 
         (<div/>)  :
         (<div>
             {record.date1}
          </div>) 
      }
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </a>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <a disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </a>
        );
      },
    },
  ];
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'date1' ? 'date' : 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

    return (
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
      </Form>
    );
}

