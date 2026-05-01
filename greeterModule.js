(function (window) {
  var Greeter = {};

  Greeter.greet = function (greeting) {
    console.log(greeting);
  };

  window.Greeter = Greeter;
})(window);
