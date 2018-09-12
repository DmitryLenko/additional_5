module.exports = function check(str, bracketsConfig) {
  var stack = [];

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
		}
}
  if (stack.length !== 0) {
    return false;
  } {
    return true;
  }

}
