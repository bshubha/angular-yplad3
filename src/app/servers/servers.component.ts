import { Component,OnInit,Input } from "@angular/core";

@Component({
  selector:'app-servers',
  templateUrl:'servers.component.html'

})

export class serversComponent implements OnInit{
  allownewServer =false;
  serverCreationStatus ="No server was created";
  serverName ='test Server';
  isserverCreated= false;
  servers = ['test Server','test server 2'];
 constructor()
 {
   setTimeout(()=>this.allownewServer=true,2000);
 }
 ngOnInit(){

 }
 OnCreateServer()
 {
   this.isserverCreated=true;
   this.servers.push(this.serverName);
   this.serverCreationStatus=this.serverName +  " was created";
 } 
 OnUpdateServerName(event: Event)
 {
   this.serverName =(<HTMLInputElement>event.target).value;
 }
}