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
    tooltip: {},
    xAxis: {
        type: 'category',
        boundaryGap: false,
        //show:false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        splitLine: {
            show: false
        },
        axisLine:{
            /* lineStyle:{
                color:'transparent'
            } */
            show:false
        }
    },
    yAxis: {
        type: 'value',
        show:false,
        splitLine: {
            show: false
        }
    },
    series: [{
        name:'渐变折线图',
                        type:'line',
                        itemStyle: {
                            color: '#6A5ACD', 
                            normal: {  
                                lineStyle: {        // 系列级个性化折线样式 
                                    width: 2, 
                                    type: 'solid', 
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                                        offset: 0, 
                                        color: '#0000FF' 
                                    }, { 
                                        offset: 1, 
                                        color: '#CD5C5C' 
                                    }]),//线条渐变色 
                                } 
                            }, 
                            emphasis: {
                                color: '#6A5ACD',   
                                lineStyle: {        // 系列级个性化折线样式 
                                    width: 2, 
                                    type: 'dotted', 
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ 
                                        offset: 0, 
                                        color: '#1E90FF' 
                                    }, { 
                                        offset: 1, 
                                        color: '#0000FF' 
                                    }]) 
                                } 
                            } 
                        },//线条样式
                       /*  areaStyle:{
                            normal:{
                               //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{

                                    offset: 0,
                                    color: 'rgba(80,141,255,0.39)'
                                }, {
                                    offset: .34,
                                    color: 'rgba(56,155,255,0.25)'
                                },{
                                    offset: 1,
                                    color: 'rgba(38,197,254,0.00)'
                                }])

                            }
                        },//区域颜色渐变 */
                        data:[450, 432, 401, 454, 590, 530, 110,242]
                 
    }]
});
    



}


    render() {
        return (
            <div id="main" style={{height:400,width:800}}></div>
        );
    }


}
export default EchartsTest;