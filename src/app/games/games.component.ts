import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { GamesService } from './games.service';

@Component({
  selector: 'app-games',
  standalone: true,
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {

  private gamesService = inject(GamesService);

  games = this.gamesService.allGames;

}
