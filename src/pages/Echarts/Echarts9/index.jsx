import React, { Component } from 'react';
import './index.less';
import echarts from 'echarts';
import 'echarts/map/js/china';
// import geoJson from 'echarts/map/json/china.json';


export default class App extends Component{
  render(){
    return(
      <div>
        <div id='main'></div>
      </div>
    )
  }
  componentDidMount(){
    this.initalECharts();
  }
  initalECharts=()=>{
    var data= [
      {name:"南海诸岛",value:0},
      {name: '北京', value: randomValue()},
      {name: '天津', value: randomValue()},
      {name: '上海', value: randomValue()},
      {name: '重庆', value: randomValue()},
      {name: '河北', value: randomValue()},
      {name: '河南', value: randomValue()},
      {name: '云南', value: randomValue()},
      {name: '辽宁', value: randomValue()},
      {name: '黑龙江', value: randomValue()},
      {name: '湖南', value: randomValue()},
      {name: '安徽', value: randomValue()},
      {name: '山东', value: randomValue()},
      {name: '新疆', value: randomValue()},
      {name: '江苏', value: randomValue()},
      {name: '浙江', value: randomValue()},
      {name: '江西', value: randomValue()},
      {name: '湖北', value: randomValue()},
      {name: '广西', value: randomValue()},
      {name: '甘肃', value: randomValue()},
      {name: '山西', value: randomValue()},
      {name: '内蒙古', value: randomValue()},
      {name: '陕西', value: randomValue()},
      {name: '吉林', value: randomValue()},
      {name: '福建', value: randomValue()},
      {name: '贵州', value: randomValue()},
      {name: '广东', value: randomValue()},
      {name: '青海', value: randomValue()},
      {name: '西藏', value: randomValue()},
      {name: '四川', value: randomValue()},
      {name: '宁夏', value: randomValue()},
      {name: '海南', value: randomValue()},
      {name: '台湾', value: randomValue()},
      {name: '香港', value: randomValue()},
      {name: '澳门', value: randomValue()}
    ]
    var myChart = echarts.init(document.getElementById('main'));
    function randomValue() {
      return Math.round(Math.random()*1000);
    }
    let option = {
      tooltip: {
        formatter:function(params,ticket, callback){
          return params.seriesName+'<br />'+params.name+'：'+params.value
        }//数据格式化
      },
      visualMap: {
        min: 0,
        max: 1500,
        left: 'left',
        top: 'bottom',
        text: ['高','低'],//取值范围的文字
        inRange: {
          color: ['#fbf8f3', '#94d2a5']//取值范围的颜色
        },
        show:true//图注
      },
      geo: {//geo和bmp区别是bmp更具体  geo是echarts内置的地图配置项  bmp使用外部引入的地图 如百度、高德地图
        map: 'china',
        roam: false,//不开启缩放和平移
        zoom: 1.23,//视角缩放比例
        label: {
          normal: {
            show: true,
            fontSize:'10',
            color: 'rgba(0,0,0,0.7)'
          }
        },
        itemStyle: {
          normal:{
            borderColor: 'rgba(0, 0, 0, 0.2)'
          },
          emphasis:{
              areaColor: 'tomato',//鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      },
      series : [
       /*  {
          name: '自定义名称',
          type: 'map',
          geoIndex: 0,
          data:data
        }, */
        {
            name: '自定义名称1',
            type: 'map',
            geoIndex: 0,
            data:data,
            itemStyle: {
                shadowBlur: 10,
                shadowColor: '#333'
            },
            zlevel: 1
          }
      ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
      alert(params.name);
    });
    
  }
}



