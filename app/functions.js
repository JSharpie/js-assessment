exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    var myFunc = function(strTwo){
      return str + ', ' + strTwo;
    }
    return myFunc;
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    var myFunc = function(item){
      return function() { return fn(item); }
    }
    // for(var i = 0; i < arr.length; i++){
    //   newArr.push(myFunc(arr[i]));
    // }
    _.each(arr, function(el){
      newArr.push(myFunc(el));
    });
    return newArr;
  },

  partial : function(fn, str1, str2) {
    function addStr(str3){
      return fn(str1, str2, str3);
    }
    return addStr
  },

  useArguments : function() {
    var args = [].slice.call(arguments);
    var sum = _.reduce(args, function(first, next){
      return first + next
    });
    return sum;
  },

  callIt : function(fn) {
    var args = [].slice.call(arguments);
    args.shift();
    fn.apply(this, args);
  },

  partialUsingArguments : function(fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
      var partial = args.concat([].slice.call(arguments));
      return fn.apply(null, partial);
    };
  },

  curryIt : function(fn) {
    function curriedFn(fnRet) {
      return function(arg) {
        var args = fnRet.concat(arg);
        if (args.length < fn.length) {
          return curriedFn(args);
        }
        else {
          return fn.apply(this, args);
        }
      };
    }
    return curriedFn([]);
  }
};
