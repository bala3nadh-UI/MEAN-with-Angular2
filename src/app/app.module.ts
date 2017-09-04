import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './app-routing.module';

import {TranslateModule} from "ng2-translate";
import './rxjs-extensions';
import {Ng2Webstorage} from 'ng2-webstorage';

/*ImportComponents*/
import { RegistrationComponent } from './components/registration/registration.component';

/*ImportServices*/
import { RegistrationService } from './services/registration.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    TranslateModule.forRoot(),
    Ng2Webstorage
  ],
  providers: [
    RegistrationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
