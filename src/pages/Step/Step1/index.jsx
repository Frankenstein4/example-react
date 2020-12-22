import React, { useState,useEffect } from 'react';
import { Steps, Button, message } from 'antd';


export default function TreeTable(){

    const { Step } = Steps;


    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
   

    const steps = [
        {
          title: 'First',
          content: 'First-content',
        },
        {
          title: 'Second',
          content: 'Second-content',
        },
        {
          title: 'Last',
          content: 'Last-content',
        },
      ];






      return (
          <>
          <Steps current={current}>
            {steps.map(item => (
              <Step key={item.title}  title={item.title} />
            ))}
          </Steps>
          <div style={{height:200}}>{steps[current].content}</div>
          <div >
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button type="primary" onClick={() => message.success('Processing complete!')}>
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </>
      );




}