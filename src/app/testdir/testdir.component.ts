import { OnInit,Component } from "@angular/core";

@Component ({
 selector: '<app-dir></app-dir>',
 templateUrl :'testdir.component.html',
 styles :['.white-text{color: white}']
})
export class testdirComponent implements OnInit
{
  showSecret =false;
  logs = [];

  ngOnInit()
  {

  }
  onToggleStatus()
  {
  
    this.logs.push(this.logs.length);
    this.showSecret =!this.showSecret;
  }
  getColor()
  {
    this.logs.length >= 5 ? 'blue' : 'transperant';
  }
}