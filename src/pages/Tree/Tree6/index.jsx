import React, { useState,useEffect } from 'react';
import { AutoComplete } from 'antd';


export default function TreeTable(){


    const options = [
        {
          value: 'Burns Bay Road',
        },
        {
          value: 'Downing Street',
        },
        {
          value: 'Wall Street',
        },
      ];






    return (
     
        <AutoComplete
        style={{
          width: 200,
        }}
        options={options}
        placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    );




}