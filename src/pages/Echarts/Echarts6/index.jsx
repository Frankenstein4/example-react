import React, {useEffect, useState} from "react";
import ReactEcharts from 'echarts-for-react';
// 引入 ECharts 主模块
import echarts from 'echarts';
//import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';



export default function DoughnutChart (){



const getOption =() =>{

return  {
    legend: {},
    tooltip: {
    },
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
            ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {gridIndex: 0},
    grid: {top: '55%'},
    series: [
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {type: 'line', smooth: true, seriesLayoutBy: 'row'},
        {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            label: {
                formatter: '{b}: {@2012} ({d}%)'
            },
            encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
            }
        }
    ]
}

}


const getOption1 =  {
      legend: {
        right: "10%",
        icon: 'circle',
        textStyle: {
          color: 'rgba(161,169,183,1)',
          fontSize: 12,
        },
        itemGap: 3,
      },
      //表头
      title: {
        text: "区域统计",
        subtext: '单位：(个)',
        subtextStyle: {
          fontSize: 11,
          color: '#939fbd',
        },
        textStyle: {
          fontSize: 14,
          align: "left",
          color: '#435372',
        },
      },
      dataset: {
        source: [
          ['Datacenter', '网络设备', '物理服务器', '云服务器','aa'],
          ['Datacenter', 0, 10.4, 345.7,88],
          ['NC', 0, 300.4, 93.7],
          ['WC', 183.1, 0, 55.1],
          ['EC', 816.4, 0, 712.5],
          ['SC', 712.4, 460, 39.1],
          ['外促', 72.4, 53.9, 39.1],
          ['EC store Wifi', 72.4, 53.9, 39.1],
        ]
        //source:data2
      },
      tooltip: {},
      xAxis: [{
        type: 'category',
        nameTextStyle: {
          color: "rgba(147,159,189,1)",//这个是无效的，默认取axisLine.lineStyle的颜色
          fontSize: 12,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "rgba(147,159,189,1)"
          }
        },
        axisTick: {
          show: false
        }
      }],
      yAxis:[{
        show: true,
        nameTextStyle: {
          color: "rgba(147,159,189,1)",
          fontWeight: "normal",
          fontSize: 12,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "rgba(147,159,189,1)"
          }
        },
        axisTick: {
          show: false
        }
      }] ,
      series: [
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#c6b3fc'},
                {offset: 1, color: '#9c7bf7'}
              ]
            ),
          },
          barWidth: 12,
          barCategoryGap: '2%',
          barGap: '40%',
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#57d2ff'},
                {offset: 1, color: '#33a8ff'}
              ]
            ),
          },
          barWidth: 12,
          barCategoryGap: '2%',
          barGap: '40%',
        },
        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#76f4ad'},
                {offset: 1, color: '#11d2cd'}
              ]
            ),
          },
          barWidth: 12,
          barCategoryGap: '2%',
          barGap: '40%',
        },

        {
          type: 'bar',
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0, 0, 0, 1,
              [
                {offset: 0, color: '#FFB5C5'},
                {offset: 1, color: '#EEA9B8'}
              ]
            ),
          },
          barWidth: 12,
          barCategoryGap: '2%',
          barGap: '40%',
        }
      ]
  }

const getOption2 =  {
    legend: {},
    tooltip: {},
    dataset: {
        // 用 dimensions 指定了维度的顺序。直角坐标系中，
        // 默认把第一个维度映射到 X 轴上，第二个维度映射到 Y 轴上。
        // 如果不指定 dimensions，也可以通过指定 series.encode
        // 完成映射，参见后文。
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
            {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
            {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
            {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
};


return (
    <div style={{width:'800px',height:'800px'}}>
        <ReactEcharts
        
          option={getOption2}

          notMerge={true}
        
          lazyUpdate={true}
        
          style={{width:'800px',height:'800px'}}
        
        
        
        />
    </div>
)



}