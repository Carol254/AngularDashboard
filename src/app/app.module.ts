import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './main/side-nav/side-nav.component';
import { ContentNavComponent } from './main/content-nav/content-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideNavComponent,
    ContentNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
