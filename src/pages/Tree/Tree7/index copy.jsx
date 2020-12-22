import React from 'react';
import { Button, List, Avatar,Select } from "antd";
const fontSizeArr = [
    {value:8},
    {value:10},
    {value:12},
    {value:13},
    {value:14},
    {value:16},
    {value:18},
    {value:20},
    {value:24},
    {value:28},
    {value:36},
    {value:48},
    {value:72},
    {value:144},
    {value:288}
]

class Kulian extends React.Component {

    state = {
        record :'',
        showArrow:true
    }



    textFontSizeChange = (value,index) => {
        const {record} = this.state;
        record[index]=value||'';
        this.setState({record});

        let { layerData, layerUpdateConfig} = this.props;
        layerData.style.fontSize = value;
        layerUpdateConfig(layerData.layerId, {style:layerData.style});
    }

onSearchSelect = (value, index) => {
        const {newValue} = this.state;
        if (!!value) {
          newValue[index] = value+'px'||'';
          this.setState({newValue});
        }
      }

 onBlurSelect = (index) => {
        const {newValue} = this.state;
        const value = newValue[index];
        if (!!value) {
        this.textFontSizeChange(value,index);
        // 在onBlur后将对应的key删除，防止当从下拉框中选择后再次触发onBlur时经过此处恢复成原来的值
        delete newValue[index]; 
        }
    }

onFocusSelect = () => {
        this.setState({showArrow: false})
    }






    render() {
        return (
            <div>

<Select
 // 此属性select可输入
showSearch
//defaultValue={`${layerData.style.fontSize}`}
value={this.state.record['1']||undefined}
 style={{ width: "100%" }}
onChange={value => this.textFontSizeChange(value,'1')}
onSearch={value => this.onSearchSelect(value, '1')}
onBlur={() => this.onBlurSelect('1')}
size="small"
//关闭搜索下拉框
filterOption={false}
onFocus={this.onFocusSelect}
//下拉箭头和搜索图标（输入时不要显示搜索图标）
//showArrow={showArrow}
>
 {fontSizeArr.map((item,index) => 
         <Option key={index} value={item.value}>{item.value}px</Option>
 )}
</Select>
            </div>
        )
    }

}

export default Kulian;