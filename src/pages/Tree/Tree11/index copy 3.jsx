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

const getNames = pageNumber => {
  let toSendNames = [];
  for (let i = (pageNumber - 1) * pageSize; i < pageNumber * pageSize; i++) {
    toSendNames.push(names[i]);
  }
  return toSendNames;
};

class Test extends React.Component {
  state = {
    isOpen: false,
    currentPage: 1
  };

  render = () => {
    return (
      <div>
        <Select
          placeholder="Select any name..."
          style={{ width: 250 }}
          onFocus={() => {
            console.log("On focus");
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
                <Divider style={{ margin: "4px 0" }} />
                <Button
                  type="ghost"
                  style={{ width: "100%", borderColor: "red" }}
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
        >
          {getNames(this.state.currentPage).map(item => {
            return <Option value={item}>{item}</Option>;
          })}
        </Select>
      </div>
    );
  };
}
export default Test;
