import { Player } from "./Player";

export class Team {
    id: number;
    name: string;
    players: Player[];
    
    constructor(id: number, name: string, players: Player[] = []) {
        this.id = id;
        this.name = name;
        this.players = players;
    }
}