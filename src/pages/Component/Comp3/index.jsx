import React, { useState,useEffect } from 'react';



import Es6cComponent from '../Comp4/index';
import AppTwo from '../Comp5/index';

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            bg:'#999'
        }
    }



    bgChange(color){
        this.setState({
            bg:color
        })
    }





    render(){
        return(
            <div>
                <Es6cComponent /* bg={this.state.bg} */ changeColor={(color)=>{this.bgChange(color)}} />
                <AppTwo bg={this.state.bg} />
            </div>
        )
    }
}

export default App