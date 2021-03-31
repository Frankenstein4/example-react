import React, { useState,useEffect } from 'react';



import Es6cComponent from '../Comp7/index';
import AppTwo from '../Comp5/index';
import { Link, history } from 'umi';
import observer from '@/utils/observer';


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
        //observer.$emit('handler','11111');
        console.log('2222222222');
        /*  ...  */
    }

    btn(){

        history.push({
            pathname: '/Component/Comp15',
          });
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={()=>this.btn()}>跳转</button>
                    <button /* onClick={()=>this.al()} */>测试从父组件发布订阅</button>
                </div>
                <Es6cComponent bg={this.state.bg} changeColor={(color)=>{this.bgChange(color)}}  al={()=>this.al()}/>
                <AppTwo bg={this.state.bg} />
            </div>
        )
    }
}

export default App