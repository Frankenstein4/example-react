import React, { useState,useEffect } from 'react';

import { fetchProfileData } from "../Comp8/fakeApi";

const resource = fetchProfileData();

class Es6cComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            yanchi:resource.user.read(),
        }
    }
    bgClick(color){
        this.props.al();
        this.props.changeColor('green')
    }
    render(){
        return(
            <div>
                <p style={{background:this.props.bg}}>父组件传来的背景色{this.props.bg}</p>
               <button onClick={()=>{this.bgClick()}}>改变背景色</button>
            </div>
        )
    }
}

export default Es6cComponent