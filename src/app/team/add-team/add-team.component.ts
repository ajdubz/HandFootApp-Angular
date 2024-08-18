import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/Team';
import { Player } from '../../models/Player';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-team',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss'],
})
export class AddTeamComponent implements OnInit {
  team: Team = new Team(0, '', []);
  name: string = '';
  players: Player[] = [];
  selectedPlayers: Player[] = [];
  addTeamForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private teamService: TeamService, private playerService: PlayerService) {
    this.playerService.getAllPlayers().subscribe({
      next: (data) => {
        this.players = data;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  ngOnInit(): void {
    this.addTeamForm = this.fb.group(
      {
        name: ['', Validators.required],
        player: [0, Validators.required],
      },
      { validators: this.fieldsValidator, updateOn: 'submit' }
    );
  }

  onSubmit(): void {
    if (this.addTeamForm.valid) {
      this.team.name = this.addTeamForm.value.name;
      this.team.PlayerIds = this.addTeamForm.value.player.id;

      // console.log(this.team);

      this.teamService.addTeam(this.team).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  fieldsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const name = control.get('name');
    const description = control.get('description');

    if (name && name.value === '') {
      return { empty: true };
    }

    if (description && description.value === '') {
      return { empty: true };
    }

    return null;
  }
}