import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { DialogCloseDirective } from './directives/dialog-close.directive';

@NgModule({
  declarations: [
    AppComponent,
    DialogWrapperComponent,
    DialogCloseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
