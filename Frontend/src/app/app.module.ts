import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './project/components/menu/menu.component';
import { CheesBoardComponent } from './project/components/chees-board/chees-board.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatchComponent } from './project/components/match/match.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CheesBoardComponent,
    MatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
