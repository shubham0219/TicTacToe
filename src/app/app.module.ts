import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconComponent } from './components/icon/icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//font-awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//toaster
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, IconComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,//required animation module
    ToastrModule.forRoot(),//toaster module
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
