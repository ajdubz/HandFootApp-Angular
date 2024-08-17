import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/Team';
import { ActivatedRoute, RouterModule, RouterOutlet } from '@angular/router';
import { Player } from '../../models/Player';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-team',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './get-team.component.html',
  styleUrl: './get-team.component.scss'
})
export class GetTeamComponent {
  team: Team = new Team(0, '');
  players: Player[] = [];
  teamId: number = 0;

  constructor(private teamService: TeamService, private route: ActivatedRoute) {
    this.route.params.subscribe((params2) => {
      this.teamId = params2['id'];
      this.teamService.getTeam(this.teamId).subscribe({
        next: (data) => {
          this.team = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    });
  }

}