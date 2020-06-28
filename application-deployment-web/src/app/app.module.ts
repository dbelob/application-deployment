import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './modules/routing/app-routing.module';
import { HelloModule } from './modules/hello/hello.module';
import { AppComponent } from './app.component';
import { HelloService } from './shared/services/hello.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HelloModule
  ],
  providers: [
    HelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
