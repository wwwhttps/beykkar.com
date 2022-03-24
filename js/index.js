// var creatusername = document.querySelector("#creatuserName").value;
// var creatpassword = document.querySelector("#creatPassword").value;

// function signup(){
//     console.log(creatpassword,creatusername)
// }

//  var kk = document.querySelector(".ppp").value;
// var hh = document.querySelector(".nnn").value;
// function signup (){  
   

//    console.log(json);
// console.log(json[0].name);
// json[0].name = kk;
// console.log(json[0].name);
// console/log(kk)

// };
// let json =  [
//     {
//         "name":"nayem",
//         "password":123
//     },
//     {
//         "nam":"nayem",
//         "password":123
//     }
// ]
// function change(url){
//     window.history.pushState('new','title',url);
// }



// console.log("hello")
// const {getAge} = require("./students")
// console.log(getAge())



// const fs = require('fs');
// fs.exists('demo.txt',(resul) =>{
//     if (resul) {
//         console.log("found")
//     }
//     else{
//         console.log("not found")
//     }
// })




// const os = require('os');
// console.log(__filename);


// const path = require('path');
// console.log(path.extname("i.html"));



// const http = require('http');
// http.createServer((req,res)=>{
//     res.end("hello i am a server")
// }).listen(3000)

const io = require('socket.io')(8000)

const users = {};

io.on('connection',socket=>{
    socket.on('new-user-joined',nam=>{
        users[socket.id]= nam;
        socket.broadcast.emit('user-joined',nam);
    });
    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,nam:users[socket.id]})
    });socket.on('disconnect',message=>{
    socket.broadcast.emit('leave',users[socket.id]);
    delete users[socket.id];
});


});
console.log("he")