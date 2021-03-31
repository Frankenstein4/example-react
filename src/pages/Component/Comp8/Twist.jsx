
import React, { useState,useEffect,Component, Suspense } from 'react';
import { Spin } from 'antd';
//import ThemedButton from '../../BaseComponent/base' ;
const ThemedButton = React.lazy(() => import('../../BaseComponent/base'));

export default function Toolbar(props) {
    return (
      <div>
          <Suspense fallback={<div><Spin tip="Loading..." /></div>}>

              <ThemedButton step={props.step} number={props.number} count={props.count}  />
                
            </Suspense>
        
      </div>
    );
  }