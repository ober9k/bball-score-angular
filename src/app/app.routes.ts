import { Routes } from "@angular/router";
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'games',
    component: GamesComponent,
  },
  {
    path: 'players',
    component: PlayersComponent,
  },
  {
    path: 'teams',
    component: TeamsComponent,
  }
];
