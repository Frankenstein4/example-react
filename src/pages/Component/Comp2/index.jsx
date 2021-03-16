import React, { useState,useEffect } from 'react';

class Es6cComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
              <div>{this.props.nameall}</div>
            </div>
        )
    }
}

export default Es6cComponent