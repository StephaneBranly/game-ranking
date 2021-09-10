export interface gameType{
    gamename: string,
    uuid: string
}

export interface playerType{
    username: string,
    uuid: string,
    color: string
}

export interface dataType{
    games: Array<gameType>,
    players: Array<playerType>
}