import { Team } from './Team';

export class Player {
  nickName: string;
  email: string;
  password: string;
  teamId: number;
  team: Team;
  id: number;

  constructor(
    name: string,
    email: string,
    password: string,
    TeamId: number = 0,
    id: number,
    team: Team = new Team(0, ''),
  ) {
    this.nickName = name;
    this.email = email;
    this.password = password;
    this.teamId = TeamId;
    this.team = team;
    this.id = id;
  }
}
