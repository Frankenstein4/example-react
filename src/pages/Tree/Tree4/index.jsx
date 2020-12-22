
import React, { useState,useEffect } from 'react';
import { Transfer, Tree,DatePicker } from 'antd';

import moment from 'moment';

export default function Tree1() {

    const [arrData,setArrdata] = useState([]);

    const [cc,setcc] =useState([]);

    useEffect(()=>{
        getTreeData();
        showTimeC();
        
        setcc(["kernel.files.allocated", "kernel.files.left", "kernel.maxfiles", "kernel.maxproc","net.if.total.bytes", "net.if.total.dropped"]);
    },[])
    var arr = [
        {
            title:'1111',
            matric: [
                "cpu.guest", "cpu.idle", "cpu.iowait", "cpu.irq", "cpu.nice", "cpu.softirq", "cpu.steal", "cpu.switches", "cpu.system", "cpu.user" 
            ]
        },
        {
            title:'22222',
            matric:["df.bytes.free.percent", "df.inodes.free.percent", "df.statistics.total", "df.statistics.used", "df.statistics.used.percent", "disk.io.avgqu-sz", "disk.io.avgrq_sz", "disk.io.await", "disk.io.ios_in_progress", "disk.io.msec_read", "disk.io.msec_total", "disk.io.msec_weighted_total", "disk.io.msec_write", "disk.io.read_bytes", "disk.io.read_merged", "disk.io.read_requests", "disk.io.read_sectors", "disk.io.svctm", "disk.io.util", "disk.io.write_bytes", "disk.io.write_merged", "disk.io.write_requests", "disk.io.write_sectors"
            ]
        },
        {
            title:'333333',
            matric:["kernel.files.allocated", "kernel.files.left", "kernel.maxfiles", "kernel.maxproc"            ]
        },
        {
            title:'444444444',
            matric:["net.if.in.bits", "net.if.in.bytes", "net.if.in.compressed", "net.if.in.dropped", "net.if.in.errors", "net.if.in.fifo.errs", "net.if.in.frame.errs", "net.if.in.multicast", "net.if.in.packets", "net.if.in.percent", "net.if.out.bits", "net.if.out.bytes", "net.if.out.carrier.errs", "net.if.out.collisions", "net.if.out.compressed", "net.if.out.dropped", "net.if.out.errors", "net.if.out.fifo.errs", "net.if.out.packets", "net.if.out.percent", "net.if.speed.bits", "net.if.total.bits", "net.if.total.bytes", "net.if.total.dropped", "net.if.total.errors", "net.if.total.packets"]
        }

    ];
 
    const treeData = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            children: [
              {
                title: 'leaf',
                key: '0-0-0-0',
              },
              {
                title: 'leaf',
                key: '0-0-0-1',
              },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [
              {
                title: (
                  <span
                    style={{
                      color: '#1890ff',
                    }}
                  >
                    sss
                  </span>
                ),
                key: '0-0-1-0',
              },
            ],
          },
        ],
      },
    ];


    const bb = ['0-0-1-0','0-0-0-0']

    



    let treeDataTemp=[];
    const getTreeData = ()=>{
        for(let i =0;i<arr.length;i++){
           let node = {
                title: arr[i].title,
                key: 'p-'+arr[i].title,
                children: []
            };
            if(arr[i].matric.length>0){
                arr[i].matric.forEach((item,index)=>{
                    node.children.push({
                        title: item,
                        key: item,
                    });
                });
            }
            treeDataTemp.push(node);
        }
        //console.log(JSON.stringify(treeDataTemp));
        setArrdata(treeDataTemp);
        
    }
    
    const ee= [{"title":"1111","key":"p-1111","children":[{"title":"cpu.guest","key":"cpu.guest"},{"title":"cpu.idle","key":"cpu.idle"},{"title":"cpu.iowait","key":"cpu.iowait"},{"title":"cpu.irq","key":"cpu.irq"},{"title":"cpu.nice","key":"cpu.nice"},{"title":"cpu.softirq","key":"cpu.softirq"},{"title":"cpu.steal","key":"cpu.steal"},{"title":"cpu.switches","key":"cpu.switches"},{"title":"cpu.system","key":"cpu.system"},{"title":"cpu.user","key":"cpu.user"}]},{"title":"22222","key":"p-22222","children":[{"title":"df.bytes.free.percent","key":"df.bytes.free.percent"},{"title":"df.inodes.free.percent","key":"df.inodes.free.percent"},{"title":"df.statistics.total","key":"df.statistics.total"},{"title":"df.statistics.used","key":"df.statistics.used"},{"title":"df.statistics.used.percent","key":"df.statistics.used.percent"},{"title":"disk.io.avgqu-sz","key":"disk.io.avgqu-sz"},{"title":"disk.io.avgrq_sz","key":"disk.io.avgrq_sz"},{"title":"disk.io.await","key":"disk.io.await"},{"title":"disk.io.ios_in_progress","key":"disk.io.ios_in_progress"},{"title":"disk.io.msec_read","key":"disk.io.msec_read"},{"title":"disk.io.msec_total","key":"disk.io.msec_total"},{"title":"disk.io.msec_weighted_total","key":"disk.io.msec_weighted_total"},{"title":"disk.io.msec_write","key":"disk.io.msec_write"},{"title":"disk.io.read_bytes","key":"disk.io.read_bytes"},{"title":"disk.io.read_merged","key":"disk.io.read_merged"},{"title":"disk.io.read_requests","key":"disk.io.read_requests"},{"title":"disk.io.read_sectors","key":"disk.io.read_sectors"},{"title":"disk.io.svctm","key":"disk.io.svctm"},{"title":"disk.io.util","key":"disk.io.util"},{"title":"disk.io.write_bytes","key":"disk.io.write_bytes"},{"title":"disk.io.write_merged","key":"disk.io.write_merged"},{"title":"disk.io.write_requests","key":"disk.io.write_requests"},{"title":"disk.io.write_sectors","key":"disk.io.write_sectors"}]},{"title":"333333","key":"p-333333","children":[{"title":"kernel.files.allocated","key":"kernel.files.allocated"},{"title":"kernel.files.left","key":"kernel.files.left"},{"title":"kernel.maxfiles","key":"kernel.maxfiles"},{"title":"kernel.maxproc","key":"kernel.maxproc"}]},{"title":"444444444","key":"p-444444444","children":[{"title":"net.if.in.bits","key":"net.if.in.bits"},{"title":"net.if.in.bytes","key":"net.if.in.bytes"},{"title":"net.if.in.compressed","key":"net.if.in.compressed"},{"title":"net.if.in.dropped","key":"net.if.in.dropped"},{"title":"net.if.in.errors","key":"net.if.in.errors"},{"title":"net.if.in.fifo.errs","key":"net.if.in.fifo.errs"},{"title":"net.if.in.frame.errs","key":"net.if.in.frame.errs"},{"title":"net.if.in.multicast","key":"net.if.in.multicast"},{"title":"net.if.in.packets","key":"net.if.in.packets"},{"title":"net.if.in.percent","key":"net.if.in.percent"},{"title":"net.if.out.bits","key":"net.if.out.bits"},{"title":"net.if.out.bytes","key":"net.if.out.bytes"},{"title":"net.if.out.carrier.errs","key":"net.if.out.carrier.errs"},{"title":"net.if.out.collisions","key":"net.if.out.collisions"},{"title":"net.if.out.compressed","key":"net.if.out.compressed"},{"title":"net.if.out.dropped","key":"net.if.out.dropped"},{"title":"net.if.out.errors","key":"net.if.out.errors"},{"title":"net.if.out.fifo.errs","key":"net.if.out.fifo.errs"},{"title":"net.if.out.packets","key":"net.if.out.packets"},{"title":"net.if.out.percent","key":"net.if.out.percent"},{"title":"net.if.speed.bits","key":"net.if.speed.bits"},{"title":"net.if.total.bits","key":"net.if.total.bits"},{"title":"net.if.total.bytes","key":"net.if.total.bytes"},{"title":"net.if.total.dropped","key":"net.if.total.dropped"},{"title":"net.if.total.errors","key":"net.if.total.errors"},{"title":"net.if.total.packets","key":"net.if.total.packets"}]}];

    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
      };
    
      const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
        setcc(checkedKeys);
      };


      function onChange(value, dateString) {
        console.log("=======value",value);
        console.log('======dateString',dateString)
        // const time = new Date(value).getTime();
        // console.log('=======时间戳',time);
      }


      const showTimeC = () =>{
        const a = moment(new Date(),'YYYY-MM-DD')
        //const a = moment('2020-07-29 08:00:00', 'YYYY-MM-DD');这样才行
        console.log(a)
        return a
      }

return (
    <div style={{background:'#fff'}}>
        <Tree
      checkable
      //defaultExpandedKeys={['0-0-0', '0-0-1']}
      //defaultSelectedKeys={['0-0-0', '0-0-1']}
      //defaultCheckedKeys={['0-0-1-0','0-0-0-0']} 
    //   checkedKeys={{checked:cc,
    //           halfChecked:arrData
    //         }}
    //defaultCheckedKeys={['cpu.user']}
      checkedKeys={cc}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={arrData}
    />


    <div>
    <DatePicker  inputReadOnly 
      onChange={onChange}
                            //format="YYYY-MM-DD HH:mm:ss"
                            defaultValue={showTimeC}
                           // showTime={{ defaultValue: showTimeC }}
                            showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                />
    </div>
    </div>
)



}