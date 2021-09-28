import { algorithmType, gameType, historyEntryType, playerType, resultType, scoreType } from "../types/data"
import { elo, elo_expected } from "./elo";

export const getPlayerProfile = (players: Array<playerType>, uuidPlayer: string): playerType => {
    return (players.filter(player => (player.uuid === uuidPlayer))[0])
}

export const getPlayerLabel = (player: playerType): string => {
    if(player.username.length>1)
        return player.username[0].toUpperCase()+player.username[1];
    return player.username[0].toUpperCase();
}



export const calculateRanking = (game: gameType): Array<historyEntryType> => {
    if(!game.results)
        return [];
    let rankHistory: Array<historyEntryType>  = []
    rankHistory.push({ resultUuid: "", playersRank: []})
    rankHistory[0].playersRank = game.players!.map(player => { return { playerUuid: player.uuid, score: 1200, deltaScore: 0 }}) 
    let lastEntry: historyEntryType = rankHistory[0]
    game.results.forEach(result => {
        const newEntry = generateNewEntry(result, lastEntry)
        rankHistory.push(newEntry);
        lastEntry = newEntry
    });
    return rankHistory;
}

export const generateNewEntry = (result: resultType, lastEntry: historyEntryType) => {
    let newEntry: historyEntryType = {
        resultUuid: result.uuid,
        playersRank: []
    };
    lastEntry.playersRank.forEach(player => { newEntry.playersRank.push({ playerUuid: player.playerUuid, score: 0, deltaScore: 0})})
    result.ranks.forEach(currentPlayer => {
        const nbSameRank = result.ranks.filter(rankFilter => (currentPlayer.rank === rankFilter.rank)).length
        const other_players = result.ranks.filter(rankFilter => (currentPlayer.rank !== rankFilter.rank))
        const index = getIndexInEntry(currentPlayer.uuid,newEntry)
        const lastScoreCurrentPlayer = lastEntry.playersRank[getIndexInEntry(currentPlayer.uuid,lastEntry)].score

        other_players.forEach(otherPlayer => { 
            const lastScoreOtherPlayer = lastEntry.playersRank[getIndexInEntry(otherPlayer.uuid,lastEntry)].score
            const win = currentPlayer.rank > otherPlayer.rank ? 1 : 0;
            const expected = elo_expected(lastScoreCurrentPlayer,lastScoreOtherPlayer)
            const newScore = elo(lastScoreCurrentPlayer, expected, win, nbSameRank)
            newEntry.playersRank[index].score = newScore
            newEntry.playersRank[index].deltaScore = newScore - lastScoreCurrentPlayer
        })
    });
    return newEntry
}


export const getIndexInEntry = (playerUuid: string, entry: historyEntryType): number => {
    return entry.playersRank.findIndex((obj => obj.playerUuid === playerUuid));
}