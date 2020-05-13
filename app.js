// console.log('hey Advait');

// var time =0;

// setTimeout(function(){
//     console.log('3 seconds done')
// },3000);

// var timer = setInterval(function(){
//     time += 1
//     console.log(time + 'seconds passed');
//     if(time > 4){
//         clearInterval(timer);
//     }
// }, 1000);

// console.log(__dirname);

// console.log(__filename);

//functionExpression
// var sayHi = function(){
//     console.log('hii')
// }

// function callerFunction(funct){
//     funct();
// }

// callerFunction(sayHi);

//require and modules
//var stuff = require('./stuff');

//more about module 
// console.log(stuff.ct([1,2,3]));
// console.log(stuff.adder(3,4));
// console.log(stuff.pi);
// console.log(stuff.adder(stuff.pi, 10));

//Event module

// Element.on('click', functions(){})
//1 EXample
//var events = require('events');
// var myEmitter = new events.EventEmitter();
// myEmitter.on('anEvent', function(message){
//     console.log(message);
// })

// myEmitter.emit('anEvent', 'This is event module...emitting event')

//2 EXample
// var events = require('events');
// var util = require('util');

// var person = function(name){
//     this.name = name;
// };

// util.inherits(person,events.EventEmitter);

// var person1  = new person('p1');
// var person2  = new person('p2');
// var person3  = new person('p3');

// var people = [person1, person2, person3];

// people.forEach(function(person){
//     person.on('speak', function(msg){
//         console.log(person.name + ' said: ' + msg);
//     });
// });

// person1.emit('speak', 'hello everybody');
// person2.emit('speak', 'cheers!!!!!!!');
// person3.emit('speak', 'Good Game');

//Reading and Writing files.
//Ex Read 
//1 synchronous method
var fs = require('fs');

// var readMe = fs.readFileSync('read.txt', 'utf8');

// console.log(readMe);

//2 Asynchronous method

// fs.readFile('read.txt', 'utf8', function(err, data){
//     console.log(data)
// });

// console.log('test');

//Ex Write 
//1 synchronous method

// fs.writeFileSync('write.txt', readMe);

//2 Asynchronous method

// fs.readFile('read.txt', 'utf8', function(err, data){
//     fs.writeFile('write2.txt', data, function(err,data){
//         if (err) console.log('error', err);
//     });
// } );

//Ex Delete
//1 synchronous method

// fs.unlinkSync('write.txt');

//2 Asynchronous method
// fs.unlink('write.txt', function(err){
//     if (err) console.log('error', err);
// });

//Create and Remove Directories
//Ex
//1 synchronous method
//create
var fs = require('fs');

// fs.mkdirSync('stuff');

//remove
//  fs.rmdir('stuff', function(err){
//      if (err) console.log('error', err);
//  });

//2 Asynchronous method
//create

// fs.mkdir('stuff', function(){
//     fs.readFile('read.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/write.txt', data, function(err){
//             if(err) console.log('throw error', err);
//         });
//     });
// });
//remove

// fs.unlink('./stuff/write.txt', function(){
//     fs.rmdir('./stuff', function(err){
//         if(err) console.log('throw err', err);
//     });
// });

//Client and Servers
//create server
// var http = require('http');

// var server = http.createServer(function(req, res){
//     console.log('request made: ' + req.url);
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end('hello!!!');
// });

// server.listen(3000, '127.0.0.1');
// console.log('listening to port 3000......');

//streams and buffers
//Readable Stream
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/rg.jpg');

myReadStream.on('data', function(chunk){
    console.log('new chunk received');
    console.log(chunk);
})


