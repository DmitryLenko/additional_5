module.exports = function check(str, bracketsConfig) {
  var stack = [];
  var arr = [];

  for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < bracketsConfig.length; j++) {
      if(str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
        stack.push(str[i]);
      } else if(str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] != bracketsConfig[j][1]) {
        var last = stack.pop();
        if(last === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
        } else {
          return false
        } 
      }else if (str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1]) { 
        if(prev === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          var lastMatch = stack.pop();
          arr.pop();
          prev = arr[0];
          if(lastMatch === bracketsConfig[j][0] && str[i] === bracketsConfig[j][1]) {
          } else {
            return false
          } 
        } else {
          stack.push(str[i]);
          arr.push(str[i]);
          var prev = str[i];
        }
        
      }
    }
  }
    if (stack.length !== 0) {
      return false;
    } {
      return true;
    }
}
