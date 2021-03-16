import React, { useState,useEffect } from 'react';

class Es6cComponent extends React.Component{
    constructor(props){
        super(props);
    }
    bgClick(color){
        this.props.changeColor('green')
    }
    render(){
        return(
            <div style={{background:this.props.bg}}>
                <p>父组件传来的背景色{this.props.bg}</p>
               <button onClick={()=>{this.bgClick()}}>改变背景色</button>
            </div>
        )
    }
}

export default Es6cComponent