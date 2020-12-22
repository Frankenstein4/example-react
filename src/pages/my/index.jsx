import React, { Component, useState } from 'react';

//引入antd
import { Layout, Menu, Button, Input, Card, message } from 'antd';
import { LockOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { history } from 'umi';

//引入样式
import style from './style.less'


import request from '../../utils/request'


/* class LoginStu extends React.Component{

  //用这种方法必须使用react的生命周期函数
  //如
  constructor(){
        super();
        this.title="注册"
 }

 <h3>{this.title}</h3>
  
} */

export default function LoginStu() {

  const [account, setAccount] = useState("admin");
  const [password, setPassword] = useState("123456");

  const accountChange = event => {
    setAccount(event.target.value);
  };
  const passwordChange = event => {
    setPassword(event.target.value);
  };

  const btnLogin = () => {

    if (account == "") {
      // $("#txtEmail").focus();
      // layer.msg("账户不能为空！");
      message.warning('账户名不能为空!');
      return;
    }

    if (password == "") {
      // $("#txtPassword1").focus();
      // layer.msg("密码不能为空！");
      message.warning('密码不能为空!');
      return;
    }

    //message.success('恭喜你开始入门react!');
    request('/devApi/login', {
      method: 'post',
      data: {
        username: account,
        password: password
      },
    })
      .then(function (res) {
        console.log(res);
        const { data } = res;

        if (res.meta.status !== 200) {
          message.warning({
            content:res.meta.msg
          })
        }else{
          //保存token
          window.sessionStorage.setItem("token", data.token);
          history.push('/welcome');//登录成功跳转
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });


    /* useEffect(() => {
      console.log('history:\n',history.location);
      var id = history.location.query.id;
      userBuinessLinkInfo(id).then( res => {
        console.log(res);
        form.setFieldsValue({ alias: res.alias });
        form.setFieldsValue({ alarmLatencyThreshold: res.alarmLatencyThreshold });
        form.setFieldsValue({ internetVpnRedundancy: res.internetVpnRedundancy });
  
      }).catch( err => {
  
      } )
    }) */

    /* 
    1使用静态文件资源
    <img src={require('../assets/picture.png')} />
    
    2关闭开箱中eslint检查
    找到package.json 文件 删除里面的 "pre-commit": "npm run lint-staged"

    3.proxy里面的代理的千万不要和你的地址里面的东西冲撞了

    */


  }

  return (
    <div className={style.container}>
      <Card title="管理员登录" bordered={false} style={{ width: 400 }} className={style.card}>
        <Input size="large" onChange={accountChange} placeholder="请输入用户名"  value={account} prefix={<UserOutlined />} className={style.inputCount} />
        <br />
        <Input size="large" onChange={passwordChange} placeholder="请输入密码" value={password} prefix={<LockOutlined />} className={style.inputCount} />
        <Button type="primary" block onClick={btnLogin}>
          登录
    </Button>
      </Card>
    </div>
  )

}
