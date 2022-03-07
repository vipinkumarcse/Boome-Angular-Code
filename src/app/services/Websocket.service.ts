import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
//import { io } from "socket.io-client";
// import { SocketIoModule, SocketIoConfig, Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  // webSocket: WebSocket;
  socketdata:any;

  constructor() { 
//  let token = localStorage.getItem('token')
// const config: SocketIoConfig = {
// 	url: 'http://3.142.108.159:6855/?token=' + token, // socket server url;
// 	options: {
// 		transports: ['websocket']
// 	}
// }
    // this.socket.
    // this.socket.emit('fetchMovies');
    // this.socket = io();
    //  
    //   const socket = io.connect('http://3.142.108.159:6855/?token=' + token);
    //   socket.on('connect', () => {
    //     console.log(socket)
    //    })
      // OptionBuilder().setTransports(['websocket']).build())
      //     .connect();
    //  console.log( this.socket)
   //this.socket = io.connect();
  }

  public sendMessage(message) {
    this.socketdata.emit('message', message);
  }

  public getNewMessage = () => {
    this.socketdata.on('message', (message) =>{
      console.log(message)
      // this.message$.next(message);
    });
    
    // return this.message$.asObservable();
  };
  // ngOnInit() {
  //   this.socket.
  // }

  openSocket(){

    let token = localStorage.getItem('token')
    // this.socketdata = io('http://3.142.108.159:6855/?token=' + token);
    // console.log(this.socketdata);
    // this.socketdata.on('message', (message) =>{
    //   console.log(message)
    //   // this.message$.next(message);
    // });
   // const socket = io('http://3.142.108.159:6855/?token=' + token);
  //  const socket = io('http://3.142.108.159:6855/',{
      // const socket = io('https://api-dev.hjelpsom.app',{
        // const socket = io('https://api.boome-wm.com',{
        const socket = io('https://api-dev.hjelpsom.app',{
        reconnection:true, reconnectionAttempts:50, reconnectionDelay:500, enabledTransports: ["ws", "wss"],
        query: {
        token:token,//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE1ZTk0NGFhYmNhZTU5OWMzNzM4MzYiLCJ0eXBlIjoiaW5mbHVlbmNlciIsInJvbGUiOiJpbmZsdWVuY2VyIiwiaWF0IjoxNjM4MjYzMTc1fQ.mFOXZT2seiA0x_6CVUMbYyETCMDoCkcbskMYQkYiTwM'
     },
     // extraHeaders: {
     //   //'Access-Control-Allow-Credentials': true,
     //   "my-custom-header": "abcd"
     // }
   });

// // const socket = io.connect("http://3.142.108.159:6855/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE1ZjFmZDVlMTI1MzE2NDcxZGQ4MjYiLCJ0eXBlIjoiaW5mbHVlbmNlciIsInJvbGUiOiJpbmZsdWVuY2VyIiwiaWF0IjoxNjM5NzI0MjY4fQ.j72vjpaQaEKlIo-cRh7wAJGsvzJrXdqG1n_yykwlYHEYou")
// //, {
//   // reconnectionDelayMax: 10000,
//   // // auth: {
//   // //   token: "123"
//   // // },
//   // query: {
//   //   setTransports: ["websocket"]
//   // }
// //});

//    /// const socket = io('http://3.142.108.159:6855/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE1ZjFmZDVlMTI1MzE2NDcxZGQ4MjYiLCJ0eXBlIjoiaW5mbHVlbmNlciIsInJvbGUiOiJpbmZsdWVuY2VyIiwiaWF0IjoxNjM5NzI0MjY4fQ.j72vjpaQaEKlIo-cRh7wAJGsvzJrXdqG1n_yykwlYHEYou' )
//     console.log(socket)
//     //+ token);

//   socket.on("connect", () => {
//     // either with send()
//     console.log(socket.id);
//     socket.send("Hello!");

//     // or with emit() and custom event names
//     socket.emit("salutations", "Hello!", { "mr": "john" }, Uint8Array.from([1, 2, 3, 4]));
//   });

//   // handle the event sent with socket.send()
//   socket.on("message", data => {
//     console.log(data);
//   });

//   // handle the event sent with socket.emit()
//   socket.on("greetings", (elem1, elem2, elem3) => {
//     console.log(elem1, elem2, elem3);
//   })
    // this.socket.on('connect', (msg: any) => {
    //   console.log(msg)
    // })
    // this.socket.on("connect", () => {
    //   console.log(this.socket.id); // x8WIv7-mJelg7on_ALbx
    // });

    // this.socket.on("connect_error", (err) => {
    //   console.log(`connect_error due to ${err.message}`);
    // });

  }

// createSocket(){ 
//     let token = localStorage.getItem('token')
//     this.webSocket = new WebSocket('http://3.142.108.159:6855/?token=' + token);
//     console.log(this.webSocket);
//   }
}

// constructor() {
//   // this.socket = io.connect('http://localhost:8000');
//   this.socket = io.connect();
//  }

//  ngOnInit() {
//        this.messages = new Array();

//        this.socket.on('message-received', (msg: any) => {
//            this.messages.push(msg);
//            console.log(msg);
//            console.log(this.messages);
//        });
//      this.socket.emit('event1', {
//          msg: 'Client to server, can you hear me server?'
//      });
//      this.socket.on('event2', (data: any) => {
//        console.log(data.msg);
//        this.socket.emit('event3', {
//            msg: 'Yes, its working for me!!'
//        });
//      });
//      this.socket.on('event4', (data: any) => {
//          console.log(data.msg);
//      });
//   }

//   sendMessage() {
//    const message = {
//      text: this.messageText
//    };
//    this.socket.emit('send-message', message);
//    // console.log(message.text);
//    this.messageText = '';
//  }
