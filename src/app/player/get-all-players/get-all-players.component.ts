import { Component } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet, RouterModule } from '@angular/router';

@Component({
  selector: 'app-get-all-players',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './get-all-players.component.html',
  styleUrl: './get-all-players.component.scss'
})
export class GetAllPlayersComponent {
  title = 'HandFootApp';
  data!: any;

  constructor(private playerService: PlayerService, private router: Router) {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.data = data;
    });

    

   }

  ngOnInit(): void {
  }

  sendValue(id: any) {
    if (id == 0) {
      this.router.navigate(['/add-player']);
    }
    else {
      this.router.navigate(['/player', id]);
    }
  }


}
