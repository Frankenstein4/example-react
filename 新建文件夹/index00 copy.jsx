import React from 'react';
import { Button,List, Avatar } from "antd";
import style from './style.less'
let scrollInterval='';




/* ----------------原始版本---------------------- */
class App extends React.Component { 
  
  state = {
    data:[
      {
        title: 'Ant Design Title 1',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 2',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team  Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 3',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 4',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team  Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 5',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },
    ],
    listMarginTop:"0",
    animate:false,
  }

  componentDidMount() {

   /*  this.startScrollUp();

    setInterval(() => {
      clearInterval(scrollInterval);
    }, 15000);

    let ulNode=document.getElementById("scrollList").getElementsByTagName("li")[0];
    console.log(ulNode) */

  }

  scrollUp= e =>{
    this.state.data.push(this.state.data[0]);
    let height=document.getElementById("scrollList").getElementsByTagName("li")[0].scrollHeight+1;
    this.setState({ 
      animate: true,
      listMarginTop: "-"+height+"px",
    }); 
    setTimeout(() => { 
      this.state.data.shift();    
      this.setState({ 
        animate: false,
        listMarginTop: "0",
      }); 
      this.forceUpdate();
    }, 2000)
  }
  
  scrollDown= e =>{
    let ulNode=document.getElementById("scrollList").getElementsByTagName("ul")[0];
    ulNode.firstChild.classList.remove("opacityAnimation");
    this.setState({ 
      animate: true ,
      listMarginTop: ulNode.lastChild.scrollHeight+"px"
    }); 
    setTimeout(() => { 
      this.state.data.unshift(this.state.data[this.state.data.length-1]);
      ulNode.firstChild.classList.add("opacityAnimation");
      this.state.data.pop();    
      this.setState({ 
        animate: false, 
        listMarginTop: "0",
      }); 
      this.forceUpdate();
    }, 1000)
  }
  
  //向上滚动操作纽
  startScrollUp= e =>{
    this.endScroll();
    this.scrollUp();
    scrollInterval=setInterval(this.scrollUp, 3000);
  }
  
  startScrollDown= e =>{
    this.endScroll();
    this.scrollDown();
    scrollInterval=setInterval(this.scrollDown, 3000);
  }
  
  endScroll= e =>{
     clearInterval(scrollInterval);
  }
 
  render () { 
     return ( 
       <div> 
        <div className={style.buttonContainer}>
          <Button type="primary" onClick={this.startScrollUp}>向上滚动</Button>
          <Button type="primary" onClick={this.startScrollDown}>向下滚动</Button>
          <Button type="danger"  onClick={this.endScroll}>停止滚动</Button>
        </div>
        <div className={style.listContainer}>
          <List
          itemLayout="horizontal"
          id="scrollList"
          style={{marginTop:this.state.listMarginTop}}
          className={this.state.animate ? "animate" : ''}
          dataSource={this.state.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description={item.description}
              />
            </List.Item>
          )}
         />
        </div>
      </div> 
     ) 
  } 
} 
export default App