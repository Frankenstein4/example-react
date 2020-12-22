<template>
  <div class="svgSet">
    <div id="topo-canvas" class="topo-canvas" ref="topo">

    </div>
    <div class="mask">

    </div>
  </div>
</template>
<script>
import { Topology, registerNode } from '@topology/core';
import myShape from '../../../myshape'
import { register as registerFlow } from '@topology/flow-diagram';
import { myTools } from './model/myTools'
export default {
  data() {
    return {
      canvas: '',
      json: {
        pens: []
      },
      showControl: false,
      copyData: {},//复制data数据，用来处理样式
    }
  },
  created() {
    this.getDeviceConfiguration()
    registerFlow()
  },
  mounted() {

    this.creatCanvas()
  },
  computed: {
    device() {
      return this.$store.getters.getDevice;
    }
  },
  watch:{
    device:{
      deep:true,
      handler(){
        this.getDeviceConfiguration()
      }
    }
  },
  methods: {

    creatCanvas() {
      let that = this
      const canvasOptions = { on: onMessage };
      const onMessage = (event, data) => {
        // console.log(event, data)
        if (event == 'addNode') {
          that.json.pens.push(data)
        } else if (event == 'move' || event == "resizePens" || event == "rotated") {
          if (event == "move") {
            that.control(data[0])
          }
          that.doData(data)
        }
        else if (event == "node") {
          that.control(data)
        } else if (event == "space") {
          if (this.showControl) {
            that.getStyle()
          }
        }
        //  console.log(JSON.parse(JSON.stringify(that.json)))
      }
      canvasOptions.on = onMessage;
      // this.json = mqtt
      this.canvas = new Topology('topo-canvas', canvasOptions);
      this.canvas.open(this.json);
    },
    async getDeviceConfiguration() {
    let myJson=  await this.HttpTool.device.getDeviceConfiguration(this.device)
    this.json=JSON.parse(myJson.configuration)
    this.$nextTick(()=>{
      this.canvas.open(this.json);
    })
    },
    //处理数据
    doData(data) {
      this.json.pens.forEach((e, index) => {
        if (e.id == data.id) {
          this.$set(this.json.pens, index, data)
          // console.log(e)
        }
      })

    },
    getStyle() {
      let data = this.copyData
      data.rect.x = Number(this.copyData.rect.x)
      data.rect.y = Number(this.copyData.rect.y)
      this.doData(data)//把data的数据更新到this.json.pens中
      console.log(JSON.parse(JSON.stringify(this.json.pens)))
      this.canvas.open(this.json)
      console.log('执行重绘操作了')
      this.showControl = false
    },
    //控制样式
    control(data) {
      this.showControl = true
      this.copyData = JSON.parse(JSON.stringify(data))
    },
    onDrag(event, e) {
      let data = {
        name: 'test_123',
        text: '',
        strokeStyle: "#222",
        rect: {
          x: 200,
          y: 200,
          width: 100,
          height: 100
        }
      }
      event.dataTransfer.setData('Text', JSON.stringify(data))
    }
  }
}
</script>
<style lang="less" scoped>
.svgSet {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  .topo-canvas {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
  .mask{
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgba(0,0,0,0);
  }
  .control {
    width: 20%;
    height: 100%;
    background: #e0e0e0;
    .item_box {
      display: flex;
    }
  }
}
</style>
