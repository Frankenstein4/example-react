import React from "react";
import ReactEcharts from "echarts-for-react";
 
class TaskChart extends React.PureComponent {
  getOption() {
    var symbolSize = 20;
    var data = [[15, 0], [-50, 10], [-56.5, 20], [-46.5, 30], [-22.1, 40]];
    var points = [];
 
    var option = {
        title: {
            text: 'Click to Add Points'
        },
        tooltip: {
            formatter: function (params) {
                var data = params.data || [0, 0];
                return data[0].toFixed(2) + ', ' + data[1].toFixed(2);
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            min: -60,
            max: 20,
            type: 'value',
            axisLine: {onZero: false}
        },
        yAxis: {
            min: 0,
            max: 40,
            type: 'value',
            axisLine: {onZero: false}
        },
        series: [
            {
                id: 'a',
                type: 'line',
                smooth: true,
                symbolSize: symbolSize,
                data: data
            }
        ],
        // --------------------------------------------------------------------------
        textStyle: {
          color : 'white',
        }
    }; 
    // -----------------------------------------------------
    return option;
  }
  /*  */
  render() {
    return (
      <div className="index_chart_box">
        <ReactEcharts
          option={this.getOption()}
          notMerge={true}
          lazyUpdate={true}
          theme={"theme_name"}
        />
      </div>
    );
  }
}
 
export default TaskChart;