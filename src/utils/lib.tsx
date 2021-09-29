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
    lastEntry.playersRank.forEach(p => { newEntry.playersRank.push({ playerUuid: p.playerUuid, score: p.score, deltaScore: p.deltaScore})})
    result.ranks.forEach(currentPlayer => {
        const nbSameRank = result.ranks.filter(rankFilter => (currentPlayer.rank === rankFilter.rank)).length
        const otherPlayers = result.ranks.filter(rankFilter => (currentPlayer.rank !== rankFilter.rank))
        const index = getIndexInEntry(currentPlayer.uuid,newEntry)
        const lastScoreCurrentPlayer = lastEntry.playersRank[getIndexInEntry(currentPlayer.uuid,lastEntry)].score
        let sumDeltaScore = 0
        otherPlayers.forEach(otherPlayer => { 
            const lastScoreOtherPlayer = lastEntry.playersRank[getIndexInEntry(otherPlayer.uuid,lastEntry)].score
            const win = currentPlayer.rank < otherPlayer.rank ? 1 : 0;
            const expected = elo_expected(lastScoreCurrentPlayer,lastScoreOtherPlayer)
            const newScore = elo(lastScoreCurrentPlayer, expected, win, nbSameRank)
            sumDeltaScore += newScore - lastScoreCurrentPlayer
        })
        newEntry.playersRank[index].score = lastScoreCurrentPlayer + sumDeltaScore
        newEntry.playersRank[index].deltaScore = sumDeltaScore
    });
    return newEntry
}


export const getIndexInEntry = (playerUuid: string, entry: historyEntryType): number => {
    return entry.playersRank.findIndex((obj => obj.playerUuid === playerUuid));
}

export const toChartScore = (scores: Array<historyEntryType>) => {
    const chartScore: any = []
    scores.forEach((score) => chartScore.push(entreyToChartScore(score)))
    console.log(chartScore)
    return chartScore
}
const entreyToChartScore = (score: historyEntryType) => {
    let obj:any={}
    obj['resultUuid']=score.resultUuid
    score.playersRank.forEach(playerRank => obj[playerRank.playerUuid]=Math.round(playerRank.score))
    return obj
}