import { Injectable, signal } from '@angular/core';
import { teams } from '../../data/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  allTeams = signal(teams).asReadonly();

}
