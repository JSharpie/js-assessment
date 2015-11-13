exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var total = 0;
    arr.forEach(function (el, idx, arr) {
      total += el;
    });
    return total;
  },

  remove : function(arr, item) {
    for(var i = 0; i < arr.length-1; i++){
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    return newArr;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var x = 0;
    arr.filter(function(value, idx ,arr){
      if(value === item){
        x++;
      }
    });
    return x;
  },

  duplicates : function(arr) {
    arr.sort();
    var newArr = [];
    for(var i = 0; i < arr.length-1; i++){
      if(arr[i+1] === arr[i]){
        newArr.push(arr[i]);
      }
    }
    var uniq = _.uniq(newArr);
    return uniq;
  },

  square : function(arr) {
    var newArr = [];
    _.map(arr, function(item, idx, arr){
      newArr.push(item * item);
    });
    return newArr;
  },

  findAllOccurrences : function(arr, target) {
    var newArr = [];
    _.each(arr, function(item, idx, arr){
      if(item === target){
        newArr.push(idx);
      }
    });
    return newArr;
  }
};
