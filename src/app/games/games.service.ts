import { Injectable, signal } from '@angular/core';
import { games } from '../../data/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  allGames = signal(games).asReadonly();

}
