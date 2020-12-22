import React from 'react';
import { Button, List, Avatar } from "antd";
import style from './style.less';


import moment from 'moment';



var count = 0;
var timer = null;
let scrollInterval='';
class Kulian extends React.Component {


    state = {
        data: [
            {
                id: 1,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风1',
                num: 0,
                Device: [
                ]
            },
            {
                id: 2,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风2',
                num: 4,
                Device: [
                    {
                        name: "7x-001"
                    },
                    {
                        name: "7x-002"
                    },
                    {
                        name: "7x-003"
                    },
                    {
                        name: "7x-004"
                    }
                ]
            },
            {
                id: 3,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风3',
                num: 0,
                Device: [
                ]
            },
            {
                id: 4,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风4',
                num: 4,
                Device: [
                    {
                        name: "7x-005"
                    },
                    {
                        name: "7x-006"
                    },
                    {
                        name: "7x-007"
                    },
                    {
                        name: "7x-008"
                    }
                ]
            },
            {
                id: 5,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风5',
                num: 2,
                Device: [
                    {
                        name: "7x-009"
                    },
                    {
                        name: "7x-0026"
                    }
                ]
            },
            {
                id: 6,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风6',
                num: 0,
                Device: [
                ]
            },
            {
                id: 7,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风7',
                num: 0,
                Device: [
                ]
            },
            {
                id: 8,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风8',
                num: 4,
                Device: [
                    {
                        name: "7x-0010"
                    },
                    {
                        name: "7x-0011"
                    },
                    {
                        name: "7x-0012"
                    },
                    {
                        name: "7x-0013"
                    }
                ]
            },
            {
                id: 9,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风9',
                num: 0,
                Device: [
                ]
            },
            {
                id: 10,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风10',
                num: 4,
                Device: [
                    {
                        name: "7x-0014"
                    },
                    {
                        name: "7x-0015"
                    },
                    {
                        name: "7x-0016"
                    },
                    {
                        name: "7x-0017"
                    }
                ]
            },
            {
                id: 11,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风11',
                num: 4,
                Device: [
                    {
                        name: "7x-0018"
                    },
                    {
                        name: "7x-0019"
                    },
                    {
                        name: "7x-0020"
                    },
                    {
                        name: "7x-0021"
                    }
                ]
            },
            {
                id: 12,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风12',
                num: 0,
                Device: [
                ]
            },
            {
                id: 13,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风13',
                num: 0,
                Device: [
                ]
            },
            {
                id: 14,
                img: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                name: '热风14',
                num: 4,
                Device: [
                    {
                        name: "7x-0022"
                    },
                    {
                        name: "7x-0023"
                    },
                    {
                        name: "7x-0024"
                    },
                    {
                        name: "7x-0025"
                    }
                ]
            }
        ],
        gjdata:[],
        flag:'',
        listMarginTop:"0",
        animate:false,
    }



    componentDidMount() {

        this.Shuj1();

       // this.startScrollUp();

       setInterval(() => {

      }, 80000);


    }





    //处理数据
    /* Shuj = () =>{
        const all = this.state.data;
        //const warn = [];
       const warn = this.state.data.filter((item,index)=>item.num!=0)
        console.log(warn);
        setInterval(() => {
            all.forEach(e=>{
                if(warn[i].id == e.id){
                    e.show = true;
                }else{
                    e.show = false;
                }
            })
            this.setState({
                data:all
              })
            i++;
            if(i=warn.length-1){
                return
            }
        }, 1000);
    } */

    /* Shuj = () => {
        const all = this.state.data;
        const warn = this.state.data.filter((item, index) => item.num != 0)
        console.log(warn);
        let t = 0;
        all.map(i => {
            if (warn[t].id == i.id) {
                i.show = true;
            } else {
                i.show = false;
            }
        });
        this.setState({
            data: all
        })
        setInterval(() => {
            all.map(i => {
                if (warn[t].id == i.id) {
                    i.show = true;
                } else {
                    i.show = false;
                }
            });
            this.setState({
                data: all
            })

            t++;

            if (t > warn.length - 1) {
                t = 0
            }
        }, 1000 * (warn[t].num));


    } */


    //轮流高亮的方法
    Shuj1 = ()=>{
            clearTimeout(timer);
            const all = this.state.data;
            const warn = this.state.data.filter((item, index) => item.num != 0)
            console.log(warn);
            all.map(i => {
                if (warn[count].id == i.id) {
                    i.show = true;
                } else {
                    i.show = false;
                }
            });
            this.setState({
                data: all,
                gjdata:warn[count].Device,//每次轮流亮的时候的告警数组，这个函数执行每次高亮的数组都不一样  此时轮滑要切合
            });
            //console.log((3500 * (warn[count].num)+1000/warn.length));

            console.log((3500 * (warn[count].num)+1000));
            console.log(warn[count].Device);



            timer = setTimeout(this.Shuj1,(3500 * (warn[count].num)+1000));
            count++;
            if (count===warn.length) {
                count=0;
                timer=null;
            }
            clearInterval(scrollInterval);
            setTimeout(() => {
                this.startScrollUp();
            }, 0);//这个方法不知道写在哪毕竟好
    }






    scrollUp= e =>{



        this.state.gjdata.push(this.state.gjdata[0]);
        let height=document.getElementById("scrollList").getElementsByTagName("li")[0].scrollHeight+1;
        this.setState({
          animate: true,
          listMarginTop: "-"+height+"px",
        });
        setTimeout(() => {
          this.state.gjdata.shift();//删除数组的第一个元素
          this.setState({
            animate: false,
            listMarginTop: "0",
          });
          this.forceUpdate();
        },500);
        console.log(this.state.gjdata[1].name);
        console.log(this.state.flag);
        if (this.state.gjdata[1].name == this.state.flag) {
            clearInterval(scrollInterval);
          }

      }




        //向上滚动操作纽
  startScrollUp= e =>{

    console.log(this.state.gjdata,'gjdata数组');

    setTimeout(() => {
        this.setState({
          flag:this.state.gjdata[this.state.gjdata.length-1].name
    });
        if(this.state.gjdata.length>1){
            scrollInterval=setInterval(()=>{
                this.scrollUp();
            }, 3000);
        }
    }, 1000);


  }



  endScroll= e =>{
     clearInterval(scrollInterval);
  }




  componentWillUnmount() {
    console.log(11111111);
    this.setState = ()=>false;

    clearInterval(scrollInterval);
    clearTimeout(timer);

}






    render() {

        return (
        <div>
            <div className={style.Box1}>
                {
                    this.state.data.map((item, index) => {
                        return (
                            <div className={item.show ? [style.Box2, style.Box3, style.Box4].join(' ') : style.Box2} key={index}>{item.name}</div>
                        )
                    })
                }
            </div>
            <div className={style.Box5}>
                    <div className={style.listContainer}>
                <ul id="scrollList"
                className={this.state.animate ? style.animate : ''}
                style={{marginTop:this.state.listMarginTop}}>
                    {
                        this.state.gjdata.map((item,index)=>{
                            return (
                                index == 0 ? <li className={style.li} style={{color:'red'}}>
                                {item.name}
                            </li> :
                                <li className={style.li}>
                                    {item.name}
                                </li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </div>
        )

    }

}

export default Kulian;
