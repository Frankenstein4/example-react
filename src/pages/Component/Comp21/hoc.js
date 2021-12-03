import React, { Component } from 'react';
import HttpUtils from './HttpUtils';

(async function(){
    const getData =  await HttpUtils.get('/api/services/statistics?type=all&access_token=e72af9b6-1fc1-494f-9232-ef318351eb2e');
    console.log(getData);
})()
const BorderHoc = WrappedComponent => class extends Component {
    
  render() {
    return <div style={{ border: 'solid 1px red' }}>
        <p>你好</p>
      <WrappedComponent />
    </div>
  }
}
export default BorderHoc