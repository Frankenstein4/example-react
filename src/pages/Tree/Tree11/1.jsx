import React from "react";
import ReactDOM from "react-dom";
import { Select } from "antd";

const { Option } = Select;

const data = [];
// let pageSize = 100,scrollPage = 1,keyWords = '',optionData = [];
for (let i = 0; i < 1000; i++) {
 data.push(`test${i}`);
}

const data_ = data.slice(0, 100);

class App extends React.Component {
 state = {
   pageSize: 100,
   scrollPage: 1,
   keyWords: "",
   optionData: data_
 };

 onChange = value => {
   console.log(`selected ${value}`);
 };

 onBlur = () => {
   console.log("blur");
   this.setState({ optionData: data_ });
 };

 onFocus = () => {
   console.log("focus");
 };

 onSearch = val => {
   console.log("search:", val);
   if (!this.timer) {
     const that = this;
     this.timer = setTimeout(function() {
       that.searchValue(val);
       that.timer = null;
     }, 300);
   }
   this.setState({ keyWords: val });
 };
 searchValue = value => {
   let data_ = data.filter(item => item.indexOf(value) > -1);
   if (data_.length > 100 || value === "") {
     data_ = data_.slice(0, 100);
   }
   this.setState({ optionData: data_ });
 };
 loadOption = pageIndex => {
   const { pageSize, keyWords } = this.state;
   const newPageSize = pageSize * (pageIndex || 1);
   let newOptionsData = [],
     len;
   if (data.length > newPageSize) {
     len = newPageSize;
   } else {
     len = data.length;
   }
   if (!!keyWords) {
     let data_ = data.filter(item => item.indexOf(keyWords) > -1) || [];
     data_.forEach((item, index) => {
       if (index < len) {
         newOptionsData.push(item);
       }
     });
   } else {
     data.forEach((item, index) => {
       if (index < len) {
         newOptionsData.push(item);
       }
     });
   }
   this.setState({ optionData: newOptionsData });
 };

 handleScroll = e => {
   e.persist();
   const { target } = e;
   const rmHeight = target.scrollHeight - target.scrollTop;
   const clHeight = target.clientHeight;
   if (rmHeight === 0 && clHeight === 0) {
     this.setState({ scrollPage: 1 });
   } else {
     if (rmHeight < clHeight + 5) {
       console.log(111, rmHeight, clHeight);
       const { scrollPage } = this.state;
       this.setState({ scrollPage: scrollPage + 1 });
       // scrollPage = scrollPage + 1;
       this.loadOption(scrollPage + 1);
     }
   }
   // console.log(e.target)
 };

 render() {
   const { optionData } = this.state;
   console.log(optionData.length);
   return (
     <Select
       showSearch
       allowClear
       onPopupScroll={this.handleScroll}
       style={{ width: 200 }}
       placeholder="Select a person"
       optionFilterProp="children"
       onChange={this.onChange}
       onFocus={this.onFocus}
       onBlur={this.onBlur}
       onSearch={this.onSearch}
       filterOption={(input, option) =>
         option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
       }
     >
       {optionData.map(item => (
         <Option value={item} key={item}>{item}</Option>
       ))}
     </Select>
   );
 }
}
export default App;
