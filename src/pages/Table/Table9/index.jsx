import { Select } from 'antd';
import React, { useEffect, useState } from "react";




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


    return (
        <div>
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

