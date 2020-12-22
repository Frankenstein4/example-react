import React from 'react';
import { Button,List, Avatar } from "antd";
import style from './style.less'
let scrollInterval='';
let scrollInterval1='';






/* -------------------我改的初版----------------- */
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
    data1:[
      {
        title: 'Ant Design Title 6',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 7',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team  Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 8',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 9',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team  Ant Design, a design language for background applications, is refined by Ant UED Team",
      },{
        title: 'Ant Design Title 10',
        description:"Ant Design, a design language for background applications, is refined by Ant UED Team",
      },
    ],
    listMarginTop:"0",
    animate:false,
    listMarginTop1:"0",
    animate1:false,
    nr:''
  }

  componentDidMount() {

    this.setState({ 
      nr:this.state.data[0].title
    }); 

    
    setTimeout(()=>{
        this.startScrollUp();
    },3000)

    setTimeout(() => {
      clearInterval(scrollInterval);
      clearInterval(aa);
      //this.startScrollUp1();//轮播右边
      this.setState({ 
        nr:this.state.data1[0].title
      }); 
    }, 15000);

 var   aa = setInterval(() => {
        let ulNode=document.getElementById("scrollList").getElementsByTagName("li")[1].innerText;
        console.log(ulNode);
        this.setState({ 
            nr:ulNode
          }); 
    }, 3000);


    var bb;
    setTimeout(() => {
      this.startScrollUp1();//轮播右边
    
      
      
    }, 18000);

   setTimeout(() => {

    bb = setInterval(() => {
      let ulNode=document.getElementById("scrollList1").getElementsByTagName("li")[1].innerText;
      console.log(ulNode);
      this.setState({ 
          nr:ulNode
        }); 
  }, 3000);
     
   },15000);

    
   

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
    }, 0)
  }
  

  
  //向上滚动操作纽
  startScrollUp= e =>{
    this.endScroll();
    this.scrollUp();
    scrollInterval=setInterval(this.scrollUp, 3000);
  }
  

  
  endScroll= e =>{
     clearInterval(scrollInterval);
  }








  scrollUp1= e =>{
    this.state.data1.push(this.state.data1[0]);
    let height=document.getElementById("scrollList1").getElementsByTagName("li")[0].scrollHeight+1;
    this.setState({ 
      animate1: true,
      listMarginTop1: "-"+height+"px",
    }); 
    setTimeout(() => { 
      this.state.data1.shift();    
      this.setState({ 
        animate1: false,
        listMarginTop1: "0",
      }); 
      this.forceUpdate();
    }, 0)
  }


  //向上滚动操作纽
  startScrollUp1= e =>{
    this.endScroll1();
    this.scrollUp1();
    scrollInterval1=setInterval(this.scrollUp1, 3000);
  }



  endScroll1= e =>{
    clearInterval(scrollInterval1);
 }





 
  render () { 
     return ( 
       <div> 
        <div className={style.listContainer}>
         <ul id="scrollList"
          style={{marginTop:this.state.listMarginTop}}>
             {
                 this.state.data.map((item,index)=>{
                     return (
                         index == 0 ? <li className={style.li} style={{color:'red'}}>
                         {item.title}
                     </li> :
                         <li className={style.li}>
                             {item.title}
                         </li>
                     )
                 })
             }
         </ul>
        </div>
            <div>{this.state.nr}</div>

            <div className={style.listContainer}>
         <ul id="scrollList1"
          style={{marginTop:this.state.listMarginTop1}}>
             {
                 this.state.data1.map((item,index)=>{
                     return (
                         index == 0 ? <li className={style.li} style={{color:'red'}}>
                         {item.title}
                     </li> :
                         <li className={style.li}>
                             {item.title}
                         </li>
                     )
                 })
             }
         </ul>
        </div>

      </div> 
     ) 
  } 
} 
export default App