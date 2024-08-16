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
  inId!: any;


  constructor(private playerService: PlayerService, private route: ActivatedRoute) {
    this.inId = this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayer(this.inId).subscribe((data: any) => {
      this.data = data;
    });
  }

  ngOnInit(): void {
    
    
  }

}
