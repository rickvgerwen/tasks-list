import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, ContentLayoutComponent, NavBarComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
