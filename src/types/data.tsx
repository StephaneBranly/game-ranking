export type gameType =
{
    gamename: string,
    uuid: string,
    players?: Array<string>
    results?: Array<resultType>
}

export type playerType =
{
    username: string,
    uuid: string,
    color: string
}

export type dataType =
{
    games: Array<gameType>,
    players: Array<playerType>
}

export type scoreType = 
{
    uuid: string,
    rank: number
}

export type resultType = 
{
    date: string,
    ranks: Array<scoreType>,
}