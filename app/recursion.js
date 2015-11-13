exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    function getFiles(dir) {
      var files = dir.files;
      dirs.push(dir.dir);
      _.each(files, function(item, idx, arr) {
        var file = item;
        if (typeof item === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(item);
          }
        } else {
          getFiles(item);
        }
      });
      dirs.pop();
      return listOfFiles;
    }
    return getFiles(data);
  },

  permute: function(arr) {
    var results = [];
    function rePermute(arr, memo) {
      var cur;
      var memo = memo || [];
      for (var i = 0; i < arr.length; i++) {
        cur = arr.splice(i, 1);
        if (arr.length === 0) {
          results.push(memo.concat(cur));
        }
        rePermute(arr, memo.concat(cur));
        arr.splice(i, 0, cur[0]);
        }
      return results;
      }
    return rePermute(arr);
  },

  fibonacci: function(n) {
    if(n <= 2) {
      return 1;
    }
    else {
      return this.fibonacci(n - 1) + this.fibonacci(n - 2);
    }
  },

  validParentheses: function(n) {
    if (n == 0){
      return [""];
    }
    var result = [];
    for (var i = 0; i < n; ++i) {
      var lefts = this.validParentheses(i);
      console.log(lefts);
      var rights = this.validParentheses(n - i - 1);
      console.log(rights);
      for (var j = 0; j < lefts.length; j++){
        for (var l = 0; l < rights.length; l++){
          result.push("(" + lefts[j] + ")" + rights[l]);
        }
      }
    }
    return result;
  }
};
