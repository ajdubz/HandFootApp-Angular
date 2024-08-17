import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-player',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './get-player.component.html',
  styleUrl: './get-player.component.scss'
})
export class GetPlayerComponent {

  data!: any;
  playerId!: number;


  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.playerId = params['id'];
      this.playerService.getPlayer(this.playerId).subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
    });
  }

  ngOnInit(): void {
    
  }

}
