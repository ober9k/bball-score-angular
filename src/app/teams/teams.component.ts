import { Component, inject } from '@angular/core';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  standalone: true,
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.css'
})
export class TeamsComponent {

  private teamsService = inject(TeamsService);

  teams = this.teamsService.allTeams;

}
