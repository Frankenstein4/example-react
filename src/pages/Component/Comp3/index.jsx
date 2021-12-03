import React, { useState,useEffect,Component, Suspense } from 'react';
import { Spin } from 'antd';
import { fetchProfileData } from "../Comp8/fakeApi";
import classNames from 'classnames';
import './style.less'

// import Es6cComponent from '../Comp4/index';
// import AppTwo from '../Comp5/index';

const Es6cComponent = React.lazy(() => import('../Comp4/index'))
const AppTwo = React.lazy(() => import('../Comp5/index'))
//const Home = React.lazy(() => import(/* webpackPrefetch: true */ 'views/Home'));

const resource = fetchProfileData();
const line = '--line-index'
class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            bg:'#999',
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

    arrayRender(){
        var res = [];
        for(var i of new Array(6).keys()){
                res.push( <li key={i} style={{'--length': i}}></li>)
          }
        return res
    }

    render(){
        return(
            <div className='div1'>
                <p /* className="div1" */ className='div2'>1111111</p>
                <Suspense fallback={<div><Spin tip="Loading..." /></div>}>

                <Es6cComponent bg={this.state.bg} changeColor={(color) => { this.bgChange(color) }} al={()=>this.al()} />
                <AppTwo bg={this.state.bg} />
                    
                </Suspense>

                <ul className="strip-loading">
                    {this.arrayRender()}
                </ul>
            </div>
        )
    }
}

export default App