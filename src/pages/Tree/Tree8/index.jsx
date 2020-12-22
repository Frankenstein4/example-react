import React, { useState,useEffect } from 'react';
import { Button, Divider, Form, Input, message, Select, Spin } from 'antd';
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";

export default function TreeTable(){


    const [form] = Form.useForm();
    const {Option} = Select;





    const [menu, setMenu] = useState([]);
    const [addName, setAddName] = useState('');






    return (
     
      <div>

<Form  form={form}>

<Form.Item  label={'源IP地址'} name={'source'}>
<Select
            placeholder="源IP地址"
            allowClear
            dropdownRender={menus => (
              <div>
                {menus}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ flex: 'auto' }} value={addName}
                         onPressEnter={()=>{
                           if (menu.includes(addName)) {
                             message.error('已经存在，不能重复')
                             setAddName('')
                             return
                           }
                           if(addName){
                             setMenu(menu.concat([addName]))
                             setTimeout(()=>{
                               form.setFieldsValue({source: addName})
                               setAddName('')
                             },500)
                           }
                         }}
                         onChange={(e)=>{
                           setAddName(e.target.value)
                         }} />
                  <a
                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                    onClick={()=>{
                      if (menu.includes(addName)) {
                        message.error('已经存在，不能重复')
                        setAddName('')
                        return
                      }
                      setMenu(menu.concat([addName]))
                      setAddName('')
                    }}
                  >
                    <PlusOutlined /> 添加
                  </a>
                </div>
              </div>
            )}
            style={{width: '100%'}}>
            {
              menu.map((item, index) => {
                return <Option value={item} key={index}>{item}</Option>
              })
            }
          </Select>
          </Form.Item>
          </Form>

      </div>
    );




}