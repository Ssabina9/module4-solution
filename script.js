(function (window) {
  var names = ["Mary", "John", "Mariana", "Jake", "Jennifer", "Bob"];

  for (var i = 0; i < names.length; i++) {
    var greeting = window.NameFinder.makeGreeting(names[i]);
    window.Greeter.greet(greeting);
  }
})(window);
