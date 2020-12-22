import { Topology } from '@topology/core';
import React, { Component, Fragment } from 'react'
import myJson from './canvas'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canvas: '',
      json:myJson
    }
  }
  componentDidMount() {
    this.init()
  }
  init=()=> {
    this.state.canvas = new Topology('topo-canvas', {});
    this.state.canvas.open(this.state.json);
  }
  render() {
    return (
      <Fragment>
        <div id="topo-canvas" style={{ width: 1200, height: 600 }}></div>
      </Fragment>
    )
  }

}


export default App;
