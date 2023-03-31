import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
