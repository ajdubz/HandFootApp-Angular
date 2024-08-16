import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {

  player: Player = new Player('', '', '', '', 0);
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  teamId: number = 0;

  addPlayerForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addPlayerForm = this.fb.group({
      name: [ '', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      teamId: [0]
    }, { validators: this.passwordMatchValidator });
  }

  onSubmit(): void {
    

    
    if (this.addPlayerForm.valid) {
    this.player = this.addPlayerForm.value;
    console.log(this.player);
      
    }
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'mismatch': true };
    }
    return null;
  }
}

export class Player {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  teamId: number;

  constructor(name: string, email: string, password: string, confirmPassword: string, TeamId: number) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.teamId = TeamId;
  }

}
