import { Team } from "./Team";

export class Player {
  nickName: string;
  email: string;
  password: string;
  teamId: number;
  team: Team;
id: any;

  constructor(
    name: string,
    email: string,
    password: string,
    TeamId: number = 0,
    team: Team = new Team(0, "")
  ) {
    this.nickName = name;
    this.email = email;
    this.password = password;
    this.teamId = TeamId;
    this.team = team;
  }
}
