const eventList = {}

const $on = function(eventName,callback){
    if(!eventList[eventName]){
        eventList[eventName] = [];
    }

    eventList[eventName].push(callback);
}

const $emit = function(eventName,params){
    if(eventList[eventName]){
        var arr = eventList[eventName];
        arr.forEach((cb)=>{
            cb(params)
        })
    }
}

const $off = function(eventName,callback){
    if(eventList[eventName]){
        if(callback){
            var index = eventList[eventName].indexOf(callback);
            eventList[eventName].splice(index,1);
        }else{
            eventList[eventName].length = 0;
        }
    }
}

export default {
    $on,
    $emit,
    $off
}
