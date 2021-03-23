import React, { useState,useEffect } from 'react';

import observer from '../../../utils/observer';


class Es6cComponent extends React.Component{
    constructor(props){
        super(props);
    }
    bgClick(color){
        this.props.al();
        this.props.changeColor('green');
        let msg = new Date().getTime();
        observer.$emit('handler',msg);
    }
    render(){
        return(
            <div>
                <h1>组件一</h1>
                <p style={{background:this.props.bg}}>父组件传来的背景色{this.props.bg}</p>
               <button onClick={()=>{this.bgClick()}}>改变背景色</button>
            </div>
        )
    }
}

export default Es6cComponent