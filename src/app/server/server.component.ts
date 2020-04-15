import {Component} from '@angular/core'
@Component({
 selector :'app-server',
 templateUrl:'./server.component.html',
 styles: [`.online{
   color :white
 }`]
  
})
export class serverComponent{
  name='server'

  serverID : number = 10;
  serverStatus : string ="";
  constructor(){
 this.serverStatus = Math.random() > 0.5 ? "Online" : "offline";
  }
  getServerStatus()
  {
    return this.serverStatus;
  }
  getColor()
  {
 return this.serverStatus === "Online" ? "green" : "red";
  }
}