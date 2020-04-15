import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {serverComponent} from './server/server.component';
import {serversComponent} from './servers/servers.component';

import {warningComponent} from './warning/warning.component';
import {sucessComponent} from './sucess/sucess.component';
import {userComponent} from './user/user.component';

import {testdirComponent} from './testdir/testdir.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,serverComponent,serversComponent,warningComponent,sucessComponent,userComponent, testdirComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
