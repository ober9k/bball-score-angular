import { Injectable, signal } from '@angular/core';
import { players } from '../../data/players';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor() { }

  allPlayers = signal(players).asReadonly();

}
