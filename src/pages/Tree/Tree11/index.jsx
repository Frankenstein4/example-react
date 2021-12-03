import React from "react";
import ReactDOM from "react-dom";
import { Select, Icon, Divider, Pagination, Button } from "antd";

const Option = Select.Option;
let names = [];
const count = 100;
const pageSize = 5;
for (let i = 0; i < count; i++) {
  names.push(`test${i}`);
}



class Test extends React.Component {
  state = {
    isOpen: false,
    currentPage: 1,
    pageSize:10,
    data:names,
    count:100
  };

   getNames = (pageNumber,count) => {
    let toSendNames = [];
    for (let i = (pageNumber - 1) * 10; i < pageNumber * count; i++) {
      toSendNames.push(this.state.data[i]);
    }
    return toSendNames;
  };

  paginationRef = React.createRef();

  render = () => {
    return (
      <div>
        <Select
          allowClear
          style={{ width: 250 }}
          onFocus={() => {
            this.setState({ isOpen: true });
          }}
          open={this.state.isOpen}
          dropdownRender={menu => (
            <div>
              {menu}
              <Divider style={{ margin: "4px 0" }} />
              <div style={{ padding: "8px", textAlign: "center" }}>
                <Pagination
                  simple
                  current={this.state.currentPage}
                  pageSize={this.state.pageSize}
                  total={this.state.count}
                  onChange={pageIndex => {
                    this.setState({
                      currentPage: pageIndex
                    });
                  }}
                />
                <br />
                <Button
                  type="primary"
                  style={{ width: "100%" }}
                  size="small"
                  onClick={() =>
                    this.setState({
                      isOpen: false
                    })
                  }
                >
                  Close
                </Button>
              </div>
            </div>
          )}
          showSearch
          //filterOption={(input, option) =>
            //option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        //}
        onSearch={val=>{
            if(val){
                 let  newSelArray = names.filter(i=>{
                  return i.includes(val);
               })
               this.setState({
                   currentPage:1,
                   data: newSelArray,
                   count:newSelArray.length,
                   pageSize:newSelArray.length,
               });
            }else{
                this.setState({
                    currentPage: 1,
                    data:names,
                    count:names.length,
                    pageSize:10
                 });
            }
           
        }}
        onChange={e=>{
            console.log(e)
            if(!e){
                this.setState({
                    currentPage: 1,
                    data:names,
                    count:names.length,
                    pageSize:10
                 });
            }
        }}
        >
          {this.getNames(this.state.currentPage,this.state.pageSize).map(item => {
            return <Option value={item} key={item}>{item}</Option>;
          })}
        </Select>
      </div>
    );
  };
}
export default Test;
