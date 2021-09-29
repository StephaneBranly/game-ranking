import { TupleType } from "typescript"

export type gameType =
{
    gamename: string,
    uuid: string,
    players?: Array<scoreType>
    results?: Array<resultType>
    rankHistory?: Array<historyEntryType>
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
    rank: number,
}

export type resultType = 
{
    date: Date,
    uuid: string,
    ranks: Array<scoreType>,
}

export type algorithmType = "elo";

export type historyEntryType = {
    resultUuid: string,
    playersRank: Array<playerRankHistory>
}

export type playerRankHistory = {
    playerUuid: string,
    score: number,
    deltaScore: number,
}
