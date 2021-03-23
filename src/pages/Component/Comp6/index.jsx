import React, { useState,useEffect } from 'react';



import Es6cComponent from '../Comp7/index';
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


    al(){
        console.log('2222222222');
        /*  ...  */
    }


    render(){
        return(
            <div>
                <Es6cComponent bg={this.state.bg} changeColor={(color)=>{this.bgChange(color)}} al={()=>this.al()} />
                <AppTwo bg={this.state.bg} />
            </div>
        )
    }
}

export default App