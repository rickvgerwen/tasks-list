import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, ContentLayoutComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
