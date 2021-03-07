import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CovidService } from './services/covid.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { JKComponent } from './jk/jk.component';
import { WorldComponent } from './world/world.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    JKComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    CovidService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
