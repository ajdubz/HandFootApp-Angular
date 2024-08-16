import { Routes } from '@angular/router';
import { GetAllPlayersComponent } from './player/get-all-players/get-all-players.component';
import { GetAllTeamsComponent } from './team/get-all-teams/get-all-teams.component';
import { GetPlayerComponent } from './player/get-player/get-player.component';
import { AddPlayerComponent } from './player/add-player/add-player.component';

export const routes: Routes = [
    { path: 'players', component: GetAllPlayersComponent, data: { title: 'View All Players' } },
    { path: 'player/:id', component: GetPlayerComponent, data: { title: 'View Player' } },
    { path: 'add-player', component: AddPlayerComponent, data: { title: 'Add Player' } },
    { path: 'teams', component: GetAllTeamsComponent, data: { title: 'View All Teams' } },
    { path: '', redirectTo: '/players', pathMatch: 'full' },
    { path: '**', component: GetAllPlayersComponent }
];