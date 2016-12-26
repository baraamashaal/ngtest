import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AuthModule } from './auth/auth.module'

import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';

import { routes } from './router';
import { InsertComponent } from './insert/insert.component';
import { UpdateComponent } from './update/update.component';

import { fireConf , fireAuthConfig } from 'database/firebaseConfig';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    InsertComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {useHash: true}),
    AngularFireModule.initializeApp(fireConf,fireAuthConfig),
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
