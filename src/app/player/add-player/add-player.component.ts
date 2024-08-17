import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player('', '', '');
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  teamId: number = 0;
  addPlayerForm: FormGroup = new FormGroup({});


  constructor(private fb: FormBuilder, private playerService: PlayerService) {}

  ngOnInit(): void {
    this.addPlayerForm = this.fb.group({
      name: [ 'test', Validators.required],
      email: ['test@email.com', [Validators.required, Validators.email]],
      password: ['test', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['test', Validators.required],
      teamId: [0]
    }, 
    { validators: this.fieldsValidator, updateOn: 'submit' });
  }

  onSubmit(): void {
      if (this.addPlayerForm.valid) {
        this.player.NickName = this.addPlayerForm.value.name;
        this.player.email = this.addPlayerForm.value.email;
        this.player.password = this.addPlayerForm.value.password;



      this.playerService.addPlayer(this.player).subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        }
      });

    }
  }

  fieldsValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    const email = control.get('email');
    const name = control.get('name');
    
    if (name && name.value === '') {
      return { 'empty': true };
    }

    if (email && email.value === '') {
      return { 'empty': true };
    }

    if (email && !email.value.includes('@')) {
      return { 'invalidEmail': true };
    }

    if (password && password.value === '') {
      return { 'empty': true };
    }

    if (confirmPassword && confirmPassword.value === '') {
      return { 'empty': true };
    }

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }



    return null;
  }
}

export class Player {
  NickName: string;
  email: string;
  password: string;
  // teamId: number;

  constructor(name: string, email: string, password: string) {
    this.NickName = name;
    this.email = email;
    this.password = password;
    // this.teamId = TeamId;
  }

}
