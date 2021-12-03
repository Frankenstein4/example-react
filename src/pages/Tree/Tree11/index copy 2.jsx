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
    data:names
  };

   getNames = pageNumber => {
    let toSendNames = [];
    for (let i = (pageNumber - 1) * 5; i < pageNumber * 5; i++) {
      toSendNames.push(this.state.data[i]);
    }
    console.log(toSendNames);
    return toSendNames;
  };

  paginationRef = React.createRef();

  render = () => {
    return (
      <div>
        <Select
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
                  total={count}
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
            console.log(val);
            if(val){
                 let  newSelArray = names.filter(i=>{
                  return i.includes(val);
               })
               this.setState({
                   currentPage:1,
                data: newSelArray
               });
            }else{
                this.setState({
                    currentPage: 1,
                    data:names
                 });
            }
           
        }}
        >
          {this.getNames(this.state.currentPage).map(item => {
            return <Option value={item}>{item}</Option>;
          })}
        </Select>
      </div>
    );
  };
}
export default Test;
