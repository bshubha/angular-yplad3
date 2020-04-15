import { Component,OnInit,Input } from "@angular/core";
@Component({
  selector :"app-user",
  templateUrl:"user.component.html"

})
export class userComponent implements OnInit
{
  userName ='';
 
  ngOnInit()
  {

  }
  OnResetUserName()
  {
   this.userName ='';
  }
}