// module.exports.ct = function(arr){
//       return 'this array has ' + arr.length + ' elements';
// };

// module.exports.adder = function(a,b){
//       return `the sum of two numbers is ${a+b}`
// };

// module.exports.pi = 3.14;

// 1)2) module.exports.ct = ct;
//  module.exports.adder = adder
//  module.exports.pi = pi

var ct = function(arr){
      return 'this array has ' + arr.length + ' elements';
};

var adder = function(a,b){
      return `the sum of two numbers is ${a+b}`
};

var pi = 3.14;

//3)
module.exports = {
      ct : ct,
      adder : adder,
      pi : pi
}