export const debounce=(fn, wait=1000)=> {
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





export const throttle1  = (fn, gapTime=500)=> {
  let _lastTime = null;
  
  return function () {
    let _nowTime = + new Date()
    if (_nowTime - _lastTime > gapTime || !_lastTime) {
      fn();
      _lastTime = _nowTime
    }
  }
}


export const  throttle = (fn,delay=5000)=> {
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
