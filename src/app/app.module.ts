import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomp } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponentModule } from './material-component/material-component.module';
import { UserDataService } from './user-data.service';

@NgModule({
  declarations: [AppComponent, routingcomp],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
