export const isFloat = (value) => {
  var regex = "/^[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)$/";

  if ((eval(regex)).test(value)) {
    return true;
  } else {
    return false;
  }
}

export const isInt = (value) => {
  var regex = "/^[1-9]+[0-9]*$/";

  if ((eval(regex)).test(value)) {
    return true;
  } else {
    return false;
  }
}

export const iopsDisplay = (data) => {
  if (data < 1200) {
    return data.toFixed(2);
  } else if (data < 1200 * 1024) {
    let a = data / 1000;
    return a.toFixed(2) + " K";
  } else if (data < 1200 * 1024 * 1024) {
    let a = data / 1000 / 1000;
    return a.toFixed(2) + " M";
  } else if (data < 1200 * 1024 * 1024 * 1024) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(2) + " G";
  } else {
    let a = data / 1000 / 1000 / 1000 / 1000;
    return a.toFixed(2) + " T";
  }
};
export const throughputDisplay = (data) => {
  var flowValue;
  if (data < 1200) {
    if (data != 0) {
      flowValue = data.toFixed(2) + " B";
    } else {
      flowValue = data + " B";
    }
  } else if (data < 1200 * 1024) {
    flowValue = (data / 1024).toFixed(2) + " KB";
  } else if (data < 1200 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024).toFixed(2) + " MB";
  } else if (data < 1200 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024).toFixed(2) + " GB";
  } else {
    flowValue = (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + " TB";
  }
  return flowValue;
};
export const throughputDisplayTop = (data) => {
  var flowValue;
  if (data < 1200) {
    if (data != 0) {
      flowValue = data.toFixed(2) + " b";
    } else {
      flowValue = data + " b";
    }
  } else if (data < 1200 * 1024) {
    flowValue = (data / 1024).toFixed(2) + " Kb";
  } else if (data < 1200 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024).toFixed(2) + " Mb";
  } else if (data < 1200 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024).toFixed(2) + " Gb";
  } else if (data < 1200 * 1024 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' Tb';
  } else if (data < 1200 * 1024 * 1024 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' Pb';
  } else if (data < 1200 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' Eb';
  } else if (data < 1200 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' Zb';
  } else if (data < 1200 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
    flowValue = (data / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' Yb';
  }
  return flowValue;
};

// 转成流量单位
export const percentageDisplay = (data) => {
  return data + "%";
}

export const temperatureDisplay = (data) => {
  return data.toString() + "℃";
}

export const bandwidthDisplay = (data) => {
  console.log("=====data?", data)
  // if (isNaN(data)||data == null || data == undefined  ) {
  //   return "NaN bps";
  // }
  data = data | 0
  if (data < 1100) {
    return data.toFixed(2) + " bps";
  } else if (data < 1100000) {
    let a = data / 1000
    return a.toFixed(2) + " Kbps";
  } else if (data < 1100000000) {
    let a = data / 1000 / 1000;
    return a.toFixed(2) + " Mbps";
  } else if (data < 1100000000000) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(2) + " Gbps";
  }
};
export const bandwidthDisplayXLabel = (data) => {
  data = data | 0
  if (data < 1100) {
    return data.toFixed(1) + " bps";
  } else if (data < 1100000) {
    let a = data / 1000
    return a.toFixed(1) + " Kbps";
  } else if (data < 1100000000) {
    let a = data / 1000 / 1000;
    return a.toFixed(1) + " Mbps";
  } else if (data < 1100000000000) {
    let a = data / 1000 / 1000 / 1000;
    return a.toFixed(1) + " Gbps";
  }
};

export const isIP = (str) => {
  var pr = /^\/([1-9]|1[0-9]|2[0-9]|3[0-2])$/;
  var ip = /^([1-9]|[1-9]\d|1\d{2}|2[0-1]\d|22[0-3])((\.(\d|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3})$/;
  if (str.indexOf("\/") != -1) {
    var p1 = str.substr(str.indexOf("\/"));
    var p0 = str.substr(0, str.indexOf("\/"));
    return (ip.test(p0) && pr.test(p1));
  } else {
    return ip.test(str);
  }
}

export const isNetMask = (value) => {
  var regex = "/(254|252|248|240|224|192|128|0)\\.0\\.0\\.0|255\\.(254|252|248|240|224|192|128|0)\\.0\\.0|255\\.255\\.(254|252|248|240|224|192|128|0)\\.0|255\\.255\\.255\\.(255|254|252|248|240|224|192|128|0)/";
  if ((eval(regex)).test(value)) {
    return true;
  } else {
    return false;
  }
}

export const isDest = (value) => {
  var regex = "/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/";
  if ((eval(regex)).test(value)) {
    return true;
  } else {
    return false;
  }
}

export const isIPLst = (value) => {
  var regex = "/^([1-9]|[1-9]\\d|1\\d{2}|2[0-1]\\d|22[0-3])((\\.(\\d|[1-9]\\d|1\\d{2}|2[0-4]\\d|25[0-5])){3})(([//](\\d|[1-2]\\d|[3][0-2]))?)$/"
  if ((eval(regex)).test(value)) {
    return true;
  } else {
    if ("0.0.0.0/0" == value) {
      return true;
    }
    return false;
  }
}

export const isHostname = (value) => {
  var regex = "/^[a-zA-Z0-9]+(([.]?[a-zA-Z0-9]+)*([-]*[a-zA-Z0-9]+)*)*$/"
  if ((eval(regex)).test(value)) {
    return true;
  } else {
    if ("0.0.0.0/0" == value) {
      return true;
    }
    return false;
  }
}

export const isPort = (value) => {
  var regex = "/^[1-9]+[0-9]*$/";

  if ((eval(regex)).test(value)) {
    return (value >= 0 && value < 65536);
  }
  return false;
}

export const isPhone = (value) => {
  var regex = "/^(\\+?0?86\\-?)?((13\\d|14[57]|15[^4,\\D]|17[678]|18\\d)\\d{8}|170[059]\\d{7})$/";

  if ((eval(regex)).test(value)) {
    return true;
  }
  return false;
}

export const isEmail = (value) => {
  var regex = "/^[\\w!#$%&'*+/=?'{|}~^-]+(?:\\.[\\w!#$%&'*+/=?'{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$/";

  if ((eval(regex)).test(value)) {
    return true;
  }
  return false;
}

export const isMac = (mac) => {
  var temp = /[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}:[A-Fa-f0-9]{2}/;
  if (!temp.test(mac)) {
    return false;
  }
  return true;
}

//钱币展示换算
export const isMoney = (value)=> {
   let  money = value.toString();
    if(money.length<=3){
        return money
    }else{
        return aa(money.substring(0,money.length-3))+','+money.substring(money.length-3)
    }
}


//正负小数正则
export const valid_2decimal = (rule, value, callback)=> {
    if (/^([-+]?[0-9]+[\d]*(.[0-9]{1,})?)$/.test(String(value))) {
      callback();
    } else {
      callback('请输入数字');
    }
}

//正负小数正则 第二种方法
export const isNumericType = (value) => {
  var reg = new RegExp('^([-+]?[0-9]+[d]*(.[0-9]{1,})?)$');
  if (!reg.test(value)) {
    return false;
  } else {
    return true;
  }
};

//ip地址段---段 0-32位地址段
export const isCheckIpRange = (value) => {
    var reg = new RegExp("^(?=(\\b|\D))(((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))\\.){3}((\\d{1,2})|(1\\d{1,2})|(2[0-4]\\d)|(25[0-5]))(?=(\\b|\\D))/([1-2][0-9]|3[0-2]|[0-9])$");
    if (!value) {
      return false;
    }else if (!reg.test(value)) {
      return false;
    }else{
        return true;
    }
};
  