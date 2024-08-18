import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-get-all-teams',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './get-all-teams.component.html',
  styleUrl: './get-all-teams.component.scss',
})
export class GetAllTeamsComponent {
  title = 'HandFootApp';
  data!: any;
  inId!: any;

  constructor(private teamService: TeamService, private router: Router) {
    this.teamService.getAllTeams().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

  ngOnInit(): void {}

  sendValue(inArg: number) {

    this.inId = inArg;
    if(this.inId == 0){
      this.router.navigate(['/add-team']);
    }
    else{
      this.router.navigate(['/team/' + this.inId]);
    }

    
    

  }
}
