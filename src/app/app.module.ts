import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import {ExpansionOverviewExample} from './home/collapse.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
      AboutComponent,
     // ExpansionOverviewExample,
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      FormsModule,
      BrowserAnimationsModule,
      // ExpansionOverviewExample,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
