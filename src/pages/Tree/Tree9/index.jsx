import React, { useState,useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
 
// 引入 ECharts 主模块
import echarts from 'echarts';
//import echarts from 'echarts/lib/echarts';
// 引入柱状图
import 'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';





const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + 1}`,
    content: `this is content ${k + 1}`
  }));
 
// 重新记录数组顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
 
  const [removed] = result.splice(startIndex, 1);
 
  result.splice(endIndex, 0, removed);
  return result;
};
 
const grid = 8;
 
// 设置样式
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  width:'100%',
  height:'400px',
  margin: `0 0 ${grid}px 0`,
  cursor : 'default',
 
  // 拖拽的时候背景变化
  background: isDragging ? "#fff" : "#ffffff",//前面鼠标按住拖拽的颜色
 
  // styles we need to apply on draggables
  ...draggableStyle
});
 
const getListStyle = () => ({
  background: 'black',
  padding: grid,
  width: 250
});
 
 
 
export default function ReactBeautifulDnd () {


  const [items,setintems] = useState(getItems(3));



    useEffect(()=>{
        toQueryChartMy();
    },[])


const toQueryChartMy = ()=>{
    let option0 = {
        title:{text:'折线图'},
         tooltip: {
            trigger:'axis'
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
    };

      let myChart0 = echarts.init(document.getElementById('main0'));
        // 绘制图表
      myChart0.setOption(option0);

      let option1 = {
         title: { text: '一周数量' },
          tooltip: {},
        xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
        },
        series: [{
            name: '销量',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };

      let myChart1 = echarts.init(document.getElementById('main1'));
        // 绘制图表
      myChart1.setOption(option1);




      let option2 =  {
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                };

      let myChart2 = echarts.init(document.getElementById('main2'));
        // 绘制图表
      myChart2.setOption(option2);









    /* for(let i =0;i<items.length;i++){
        toQueryChart(i);
    } */
}


const toQueryChart = i=>{
    let option = {
        color: ["#5760A1", "#F0B46E", '#01A3F5', '#824CB9'],
        title: {
          text: '告警数量'+i,
          left: '2%',
          textStyle: {
            left: '8%',
            fontSize: 18,
            color: "#2A195B"
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          right: '20px',
          //orient: 'vertical',//竖向排列
          data: ['Linux服务器告警数量'+i, 'Windows服务器告警数量'+i, '七云uCPE告警数量'+i, '其他设备告警数量'+i]
        },
       /*  grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        }, */
        grid: {
          left: '4%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          splitLine: {//分割线样式
            lineStyle: {
              // 使用深浅的间隔色
              color: '#F0F0F0'
            }
          },
          axisLine: {
            lineStyle: {
              color: "#2A195B"
            },
            show: false//坐标轴是否显示
          },
          type: 'category',
          boundaryGap: false,
          //data:Xdata
          //data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: '#F0F0F0'
            }
          },
          axisLine: {
            lineStyle: {
              color: "#2A195B"
            },
            show: false
          },
        },
        series: [
          {
            name: 'Linux服务器告警数量'+i,
            type: 'line',
            smooth: true,
            //data: Ydata1
            data: [['2016-1',2.6],['2016-2',1.9],['2016-3',9.0],['2016-5',21.9],['2016-6',15.9],['2016-7',91.9]]
          },
          {
            name: 'Windows服务器告警数量'+i,
            type: 'line',
            smooth: true,
            //data: Ydata2
            //data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
            data: [['2016-1',23.6],['2016-2',11.9],['2016-3',39.0],['2016-4',121.9],['2016-5',345.9],['2016-6',221.9],['2016-7',15.9],['2016-9',91.9]]
          },
          {
            name: '七云uCPE告警数量'+i,
            type: 'line',
            smooth: true,
            //data: Ydata3
            //data: [4.9, 5.9, 15.1, 8.7, 8.3, 69.2, 31.6, 46.6, 5.4, 98.4, 1.3, 0.7]
            data: [['2016-1',23.6],['2016-2',41.9],['2016-3',49.0],['2016-4',1.9],['2016-5',45.9],['2016-6',21.9],['2016-7',15.9],['2016-8',91.9]]
          },
          {
            name: '其他设备告警数量'+i,
            type: 'line',
            smooth: true,
            //data: Ydata4
            //data: [1.9, 4.9, 5.1, 86.7, 8.3, 9.2, 71.6, 6.6, 77.4, 8.4, 19.3, 20.7]
            data: [['2016-1',22.6],['2016-2',122.9],['2016-3',339.0],['2016-4',241.9],['2016-5',45.9],['2016-6',221.9],['2016-7',135.9],['2016-8',91.9]]
          }
        ]
      }

      let myChart = echarts.init(document.getElementById('main' + i));
        // 绘制图表
      myChart.setOption(option);
}




 
   const  onDragEnd = (result)=>{
    if (!result.destination) {
      return;
    }
 
    const items1 = reorder(items,result.source.index,result.destination.index);
    console.log(items1,'😎😎😎😎')
    setintems(items1);
  }
 

    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <center>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
              //provided.droppableProps应用的相同元素.
                {...provided.droppableProps}
                // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
                ref={provided.innerRef}
                //style={getListStyle(snapshot)}
              >
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                        id={'main' + index}
                      >
                        
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </center>
      </DragDropContext>
    );
  
}