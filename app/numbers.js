exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var conv = (num >>> 0).toString(2);
    if(conv.length !== 8){
      for(var i = 0; i < (8-conv.length); i++){
        conv = 0 + conv;
      }
    }
    return conv;
  },

  multiply: function(a, b) {
    var prec;
    if(a.toString().split('.')[1] !== undefined){
      prec = a.toString().split('.')[1].length;
    }
    else if(b.toString().split('.')[1] !== undefined){
      prec = b.toString().split('.')[1].length;
    }else{
      prec = 0;
    }
    var result = (a*b).toFixed(prec);
    return parseFloat(result);
  }
};
