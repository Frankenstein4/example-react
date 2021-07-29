import { Select } from 'antd';
import React, { useEffect, useState } from "react";


const debounce=(fn, wait=1000)=> {
    var timer = null;
  
    return function () {
        var context = this
        var args = arguments
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(function () {
            fn.apply(context, args)
        }, wait)
    }
  }
  
  
 const  throttle = (fn,delay=5000)=> {
    let that = this
    // 形成闭包后，此数据不变  
    var startTime = Date.now();
    var timer = null
　　return function() { 
        let args = arguments;
        var curTime = Date.now();
        // 在remaining这段时间中如果又一次触发事件，那么会取消当前的计时器，并重新计算一个remaining来判断当前状态
        var remaining = delay - (curTime -startTime)
        clearTimeout(timer)
        if(remaining <= 0) {
            // 保证了第一次触发事件就能立即执行事件处理函数和每隔delay时间执行一次事件处理函数）
            fn.apply(that, args)
            startTime = Date.now();
        } else {
            // 保证了最后一次触发事件后还能再执行一次事件处理函数
            timer = setTimeout(() => {
                fn.apply(that, args)
                timer = null
            },remaining)
        }
　　}
}


export default function AA(){


    const { Option } = Select;
        const provinceData = ['Zhejiang', 'Jiangsu'];
        const cityData = {
        Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
        Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
        };

        const [cities,setcities] = useState(cityData[provinceData[0]]);
        
        const [secondCity,setsecondCity] = useState(cityData[provinceData[0]][0]);

    useEffect(()=>{
        console.log(cities)
    },[])


const   handleProvinceChange = value => {
    console.log(value)
    //setcities(cityData[value]);
    setsecondCity(cityData[value][0]);
};

const onSecondCityChange = value => {
    setsecondCity(value);
  };



  /* const  aa = e=>{
      console.log(e)
  }

  const bb = debounce(aa); */


  const aa =  throttle((t)=>{
    console.log('t',t)//t 123123123
  })


    return (
        <div>
            <button /* onClick={bb.bind(null,'222')} */ onClick={()=>aa(222)}>点击</button>
         <Select
            defaultValue={provinceData[0]}
            style={{ width: 120 }}
            onChange={handleProvinceChange}
          >
            {provinceData.map(province => (
              <Option key={province}>{province}</Option>
            ))}
          </Select>
          <Select
            style={{ width: 120 }}
            value={secondCity}
            onChange={onSecondCityChange}
          >
            {cities.map(city => (
              <Option key={city}>{city}</Option>
            ))}
          </Select>
          </div>
      )
   
}

