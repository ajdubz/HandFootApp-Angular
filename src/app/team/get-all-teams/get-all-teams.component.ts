import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-all-teams',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './get-all-teams.component.html',
  styleUrl: './get-all-teams.component.scss'
})
export class GetAllTeamsComponent {
  title = 'HandFootApp';
  data!: any;

  constructor(private teamService: TeamService) {
    this.teamService.getAllTeams().subscribe((data) => {
      this.data = data; 
    });
    
   }

  ngOnInit(): void {
  }

}
