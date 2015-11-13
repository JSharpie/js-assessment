exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var arr = str.split('');
    count = 0;
    currLett = '';
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
      if(i === 0){
        count++;
        newArr.push(arr[i]);
      }
      else{
        if(currLett === arr[i]){
          count++;
          if(count <= amount){
            newArr.push(arr[i]);
          }
        }
        else{
          count = 1;
          newArr.push(arr[i]);
        }
      }
      currLett = arr[i];
    }
    return newArr.join('');
  },
  wordWrap: function(str, cols) {
    var arr = str.split(' ');
    var count = 0;
    var newStr = '';
    _.each(arr, function(item, idx, arr){
      if(idx === (arr.length-1)){
        newStr += item;
      }
      else{
        if(count + item.length + arr[idx++].length < cols){
          newStr += item + ' ';
          count += item.length;
        }
        else{
          newStr += item + '\n';
          count = 0;
        }
      }
    });
    return newStr;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
