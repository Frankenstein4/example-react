import React from 'react';
import { Button,List, Avatar } from "antd";
import style from './style.less'
let scrollInterval='';
let scrollInterval1='';
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
        nr:'',
        flag: ''
      }



      componentDidMount() {

        this.setState({ 
          nr:this.state.data[0].title
        }); 
    
        
        setTimeout(()=>{
            this.startScrollUp();
        },0)
    
      }




      scrollUp = e =>{
        this.state.data.push(this.state.data[0]);
        let height=document.getElementById("scrollList").getElementsByTagName("li")[0].scrollHeight+1;
        this.setState({ 
          animate: true,
          listMarginTop: "-"+height+"px",
        }); 
    
          this.state.data.shift();    
          this.setState({ 
            animate: false,
            listMarginTop: "0",
          }); 
          this.forceUpdate();
      
        console.log(this.state.flag);
        console.log(this.state.data[0].title);
        if (this.state.data[0].title == this.state.flag) {
          clearInterval(scrollInterval);
          this.startScrollUp1();//轮播右边
        }
    
      }


        //向上滚动操作纽
  startScrollUp= e =>{
        setTimeout(() => {
          this.setState({
            nr:this.state.data[0].title,
            flag: this.state.data[this.state.data.length-1].title
          });
          scrollInterval=setInterval(() => {
    
            this.scrollUp();
            let ulNode=document.getElementById("scrollList").getElementsByTagName("li")[0].innerText;
              // console.log(ulNode);
              this.setState({ 
                  nr:ulNode
                }); 
          }, 3000);
        }, 3000);
      }






    scrollUp1= e =>{
        this.state.data1.push(this.state.data1[0]);
        let height=document.getElementById("scrollList1").getElementsByTagName("li")[0].scrollHeight+1;
        this.setState({ 
          animate1: true,
          listMarginTop1: "-"+height+"px",
        }); 
    
        this.state.data1.shift();    
        this.setState({ 
          animate1: false,
          listMarginTop1: "0",
        }); 
        this.forceUpdate();
    
        if (this.state.data1[0].title == this.state.flag) {
          clearInterval(scrollInterval1);
          this.startScrollUp();//轮播左边
        }
      }
    
    
      //向上滚动操作纽
      startScrollUp1= e =>{
        setTimeout(() => {
          this.setState({ 
            nr:this.state.data1[0].title,
            flag: this.state.data1[this.state.data1.length-1].title
          });
          scrollInterval1=setInterval(() => {
            this.scrollUp1();
            let ulNode=document.getElementById("scrollList1").getElementsByTagName("li")[0].innerText;
            // console.log(ulNode);
            this.setState({ 
                nr:ulNode
              }); 
          }, 3000);
        }, 3000);
        
      }








    render () { 



        return (

            <div className={style.d1}>

            <div className={style.header}>
                <div className={style.h1}></div>
                <div className={style.h2}>
                    <p>酷联告警数据展示平台</p>
                </div>
                <div className={style.h3}></div>
            </div>
    
    
            <div className={style.container}>
                <div className={style.c1}>
                    <div className={style.c1content}>
                        <div className={style.gj}>
                            告警
                        </div>
                        <div className={style.list}>
                            <ul className={style.list_ul} id="scrollList" style={{marginTop:this.state.listMarginTop}}>

                            {
                                    this.state.data.map((item,index)=>{
                                        return (
                                            index == 0 ? <li  className={style.list_li} style={{color:'red'}}>
                                            {item.title}
                                        </li> :
                                            <li  className={style.list_li}>
                                                {item.title}
                                            </li>
                                        )
                                    })
                                }
                                {/* <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className={style.jt}></div>
                </div>
                <div className={style.c2}>
    
    
    
    
    
    
                    <div className={style.wrap}>
    
                        <div className={style.bgWrap}>
                            <div className={style.circleImg}></div>
                            <div  className={[style.circular,style.circular1].join(' ')}> <svg viewBox="0 0 80 80" className={style.svg}>
                                    <path d="M 0,40 a 40,40 0 1,1 0,1 z" id="circle" fill='none'/> <text>
                                        <textPath xlinkHref="#circle" fontSize="5" fill="#fff">热风告警数据显示</textPath>
                                    </text> </svg> </div>
                            <div className={[style.circular,style.circular2].join(' ')}> <svg viewBox="0 0 80 80" className={style.svg}>
                                    <path d="M 0,40 a 40,40 0 1,1 0,1 z" id="circle" fill='none' /> <text>
                                        <textPath xlinkHref="#circle"  fontSize="5" fill="#fff"> 缸子是笨蛋 </textPath>
                                    </text> </svg> </div>
                            <div className={[style.circular,style.circular3].join(' ')}> <svg viewBox="0 0 80 80" className={style.svg}>
                                    <path d="M 0,40 a 40,340 0 1,1 0,1 z" id="circle" fill='none' /> <text>
                                        <textPath xlinkHref="#circle" fontSize="5" fill="#fff"> 哈哈哈哈哈 </textPath>
                                    </text> </svg> </div>
                        </div>
                        <div className={style.center}>
                            <div className={style.title}>
                                <div>告警数量：<span>20</span></div>
                            </div>
                            <div className={style.titleimg}>
                                <img src="" alt="" className={style.ig}/>
                            </div>
                        </div>
                    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
                </div>
                <div className={style.c1}>
                    <div className={style.jt} style={{visibility:'hidden'}}></div>
                    <div className={style.c1content}>
                        <div className={style.gj}>
                            告警
                        </div>
                        <div className={style.list}>
                            <ul className={style.list_ul} id="scrollList1"
          style={{marginTop:this.state.listMarginTop1}}>


{
                 this.state.data1.map((item,index)=>{
                     return (
                         index == 0 ? <li className={style.list_li} style={{color:'red'}}>
                         {item.title}
                     </li> :
                         <li className={style.list_li}>
                             {item.title}
                         </li>
                     )
                 })
             }


                                {/* <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li>
                                <li className={style.list_li}></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
    
            </div>
    
            <div className={style.footer}>
    
            </div>
    
        </div>

        )


    }





}

export default App