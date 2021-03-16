import React, { useState,useEffect } from 'react';

class AppTwo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div style={{background:this.props.bg}}>
                <p>兄弟组件改变的背景色{this.props.bg}</p>
            </div>
        )
    }
}

export default AppTwo