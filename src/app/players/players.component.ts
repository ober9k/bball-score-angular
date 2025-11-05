import { Component, inject } from '@angular/core';
import { PlayersService } from './players.service';

@Component({
  selector: 'app-players',
  standalone: true,
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

  private playersService = inject(PlayersService);

  players = this.playersService.allPlayers;

}
