import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchComponent } from './project/components/match/match.component';
import { MenuComponent } from './project/components/menu/menu.component';
import { CheesBoardComponent } from './project/components/chees-board/chees-board.component';

const routes: Routes = [
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  {path: 'match/:player/:color', component: MatchComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'board', component: CheesBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
