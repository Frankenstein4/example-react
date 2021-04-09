import React, { useState,useEffect,Component, Suspense } from 'react';
import { Spin,Tabs } from 'antd';
const { TabPane } = Tabs;
class TabContainerComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
    return (
        <div>
            <Tabs defaultActiveKey="1" type="card" size="large" style={{ width: '100%' }}>
            <TabPane tab="日" key="1" style={{  width: '100%' }}>
              <iframe src="http://baidu.com" style={{  width: '100%' ,height:'100vh'}}></iframe>
            </TabPane>
            <TabPane tab="周" key="2" style={{  width: '100%' }}>
            <iframe src="http://sina.com" style={{  width: '100%',height:'100vh' }}></iframe>
            </TabPane>
            <TabPane tab="月" key="3" style={{  width: '100%' }}>
            <iframe src="http://sohu.com" style={{  width: '100%',height:'100vh' }}></iframe>
            </TabPane>
          </Tabs>
        </div>
      );
    }
}
export default TabContainerComponent