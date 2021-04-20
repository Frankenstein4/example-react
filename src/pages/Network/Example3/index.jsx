import React from 'react';
import {debounce,throttle} from './debounce'
/* class Test extends React.Component{
	add=(item)=>{
		console.log(item)//想要传的参数'
	}
	fn=debounce(this.add)
	render (){
		return <div>
			<button onClick={this.fn.bind(null,'111')}>qq</button>
			<button onClick={()=>this.fn.call(null,222)}>www</button>
		</div>
	}
} */



class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state={
        test:'我是子组件的返回值'
      }
    }
  
    add = debounce((t)=>{
      console.log('t',t)//t 123123123
    })
    render() {
      return (
        <div>
          <button onClick={()=>{
            this.add('123123123')
          }}>我要测试一下</button>
        </div>
      );
    }
  }
  

export default Test;