import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts';
//import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

//import  'echarts/lib/chart/line';


class EchartsTest extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        myChart.setOption({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
   
graphic: {
     elements: [
     	{
            type: 'image',
            style: {
                image: "https://gitee.com/Frankenstein4/tc/raw/master/wangluoshebei.png",
                width: 25,
                height: 30
                   },
            /* left: 'center',
            top: '90' */
            left: 'center',
              top: 'center'
            },
            /* {
             type: 'text',
             left: 'center', // 相对父元素居中
             top: '110',  // 相对父元素上下的位置
             style: {
                 fill: '#333333',
                  //text: ['总人数'],
                  font: '12px Arial Normal',
                     }
            } */]
          },


   /*  legend: {
        orient: 'vertical',
        x: 'left',
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
    }, */
    /* series: [
        {
            name:'访问来源',
            type:'pie',
            boxWidth:'5',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            splitLine:{
                lineStyle:{
                    width:4
                }
            },
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    //show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直接访问'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1548, name:'搜索引擎'}
            ]
        }
    ], */
    series: [{
        name:'比例',
        type: 'pie',
        radius: ['45%', '50%'],//在这里配置外半径值,和外半径可视部分的大小
        center: ['50%', '50%'],
        hoverAnimation:false,//鼠标放上去不悬浮变大
        color: ['#32A179', '#D8D8D8', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
        data: [
            {value:350, name:'在线数量'},
            {value:71, name:'离线数量'},
            /* {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'} */
        ],
/*         labelLine: {
            normal: {
                show: false,
                length: 20,
                length2: 20,
                lineStyle: {
                    color: '#12EABE',
                    width: 2
                }
            }
        }, */

        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                //show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
       
    }]
});
    




}


    render() {
        return (
            <div id="main" style={{height:200,width:200,marginLeft:'100px'}}></div>
        );
    }


}
export default EchartsTest;