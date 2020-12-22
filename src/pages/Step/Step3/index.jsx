import React, { useState,useEffect } from 'react';
import { Link, useIntl, connect, history } from 'umi';
import { Timeline,Anchor } from 'antd';
import style from '../Step2/style.less'

export default function TreeTable(){


    const options = [
        {
          value: 'Burns Bay Road',
        },
        {
          value: 'Downing Street',
        },
        {
          value: 'Wall Street',
        },
      ];






    return (
     
        <div >


            <div>
            <Timeline style={{backgroundColor:'#fff',paddingTop:'30px' }}>
        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=410ff47cd154a491ebb2ed2ca40d8adb&imgtype=0&src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201309%2F26%2F20130926095128_SiPMh.jpeg' />} >
          这是第一个节点的内容
          
        </Timeline.Item>
        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>} >
          这是第二个节点的内容
        </Timeline.Item>
      </Timeline>
            </div>



            <div>
          <div style={{width:'100%',height:'800px'}}  className={style.box}>000000000000</div>
          <div style={{width:'100%',height:'800px'}} id='box1' className={style.box}>11</div>
          <div style={{width:'100%',height:'800px'}} id='box2'  className={style.box}>22</div>
          <div style={{width:'100%',height:'800px'}} id='box3' className={style.box}>33</div>
          <div style={{width:'100%',height:'800px'}} id='box4' className={style.box}>44</div>
          <div style={{width:'100%',height:'800px'}}  id='box5' className={style.box}>55</div>

<div style={{backgroundColor:'#fff',width:'200px',height:'400px',position:'fixed',right:24,top:200}}>
  


                    <Timeline style={{ backgroundColor: '#fff', paddingTop: '30px' }}>
                        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>}>
                            <a href="#box1" title="Basic demo" style={{ height: '50px' }} >111</a>
                        </Timeline.Item>
                        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>}>
                            <a href="#box2" title="Basic demo" style={{ height: '50px' }} >222</a>
                        </Timeline.Item>
                        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>}>
                            <a href="#box3" title="Basic demo" style={{ height: '50px' }} >333</a>
                        </Timeline.Item>
                        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>}>
                            <a href="#box4" title="Basic demo" style={{ height: '50px' }} >444</a>
                        </Timeline.Item>
                        <Timeline.Item style={{ width: '90%', margin: 'auto' }} dot={<img style={{width:30,height:30,borderRadius:'50%'}} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596129248963&di=390fb20ec3728be6efcde43835a50d22&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F23%2F20151223175222_5kuj4.jpeg'/>}>
                            <a href="#box5" title="Basic demo" style={{ height: '50px' }} >555</a>
                        </Timeline.Item>

                   </Timeline>
                  
      


</div>
</div>






        </div>

    );




}