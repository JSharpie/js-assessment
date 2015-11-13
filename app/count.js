exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function timer() {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(timer, 100);
      }
    }
    timer();
    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
