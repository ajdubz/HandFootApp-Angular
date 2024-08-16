import { Routes } from '@angular/router';
import { GetAllPlayersComponent } from './player/get-all-players/get-all-players.component';
import { GetAllTeamsComponent } from './team/get-all-teams/get-all-teams.component';
import { GetPlayerComponent } from './player/get-player/get-player.component';

export const routes: Routes = [
    { path: 'players', component: GetAllPlayersComponent, data: { title: 'Players' } },
    { path: 'player/:id', component: GetPlayerComponent, data: { title: 'Player' } },
    { path: 'teams', component: GetAllTeamsComponent, data: { title: 'Teams' } },
    { path: '', redirectTo: '/players', pathMatch: 'full' },
    { path: '**', component: GetAllPlayersComponent }
];