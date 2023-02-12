import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './project/components/menu/menu.component';
import { CheesBoardComponent } from './project/components/chees-board/chees-board.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CheesBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
