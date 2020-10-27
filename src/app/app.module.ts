import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [BrowserModule, MatCardModule],
  providers: [MatCardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
