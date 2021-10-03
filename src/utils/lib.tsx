import { randomFill } from "crypto";
import { gameType, historyEntryType, playerType, resultType, scoreType } from "../types/data"
import { elo, elo_expected } from "./elo";

export const getPlayerProfile = (players: Array<playerType>, uuidPlayer: string): playerType => {
    return (players.filter(player => (player.uuid === uuidPlayer))[0])
}

export const getResult = (results: Array<resultType>, resultUuid: string): resultType => {
    return (results.filter(result => (result.uuid === resultUuid))[0])
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
    rankHistory[0].playersRank = game.players.map(player => { return { playerUuid: player.uuid, score: 1200, deltaScore: 0 }}) 
    let lastEntry: historyEntryType = rankHistory[0]
    game.results.sort((a,b) => a.date >= b.date ? 1 : -1).forEach(result => {
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
    let nbRank: any = {}
    for(let i=0; i<result.ranks.length; i++)
        nbRank[i+1] = result.ranks.filter(rankFilter => (i+1 === rankFilter.rank)).length

    result.ranks.forEach(currentPlayer => {
        const otherPlayers = result.ranks.filter(rankFilter => (currentPlayer.rank !== rankFilter.rank))
        const index = getIndexInEntry(currentPlayer.uuid,newEntry)
        const lastScoreCurrentPlayer = lastEntry.playersRank[getIndexInEntry(currentPlayer.uuid,lastEntry)].score
        let sumDeltaScore = 0
        otherPlayers.forEach(otherPlayer => { 
            const lastScoreOtherPlayer = lastEntry.playersRank[getIndexInEntry(otherPlayer.uuid,lastEntry)].score
            const win = currentPlayer.rank < otherPlayer.rank ? 1 : 0;
            const expected = elo_expected(lastScoreCurrentPlayer,lastScoreOtherPlayer)
            const divFactor = nbRank[currentPlayer.rank] * nbRank[otherPlayer.rank]
            const newScore = elo(lastScoreCurrentPlayer, expected, win, divFactor)
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
    return chartScore
}

const entreyToChartScore = (score: historyEntryType) => {
    let obj:any={}
    obj['resultUuid']=score.resultUuid
    score.playersRank.forEach(playerRank => obj[playerRank.playerUuid]=Math.round(playerRank.score))
    return obj
}

export const generateGameFromLoadedData  = (game: { gamename: any; uuid: any; results: resultType[]; }) => {
  let newData: gameType = {
    gamename: game.gamename,
    uuid: game.uuid,
    players: [],
    results: [],
    rankHistory: []
  }
 
  game.results.forEach((result: resultType) => {
    const newResult: resultType = result
    newResult.date = new Date(newResult.date)
    newData.results.push(newResult);
    newResult.ranks.forEach(rank => {
    if(newData.players)
    {
        if(!newData.players.some(player => player.uuid === rank.uuid))
        newData.players?.push({uuid:rank.uuid,rank:0});
    }
    else
      newData.players=[{uuid:rank.uuid,rank:0}];
    });
  })
  
  newData.rankHistory = calculateRanking(newData);

  if(newData.players)
  {
      const sortedRanks = newData.players.sort((a, b) => a.rank > b.rank ? 1 : -1)
      newData.players = sortedRanks;
  }
  return newData
}

export const calculatePresentPlayers = (game: gameType): Array<scoreType> => {
    const players: Array<scoreType> = []
    game.results.forEach(result => {
        result.ranks.forEach(rank => {
        if(!players.some(player => player.uuid === rank.uuid))
            players.push({uuid:rank.uuid,rank:0});
        })
    })
    return players
} 

export const calculateNbPosition = (games: Array<gameType>, playerUuid: string, position: number) => {
    let total = 0;
    games.forEach(game => {
        game.results.forEach(result => {
            const resultRank = result.ranks.filter(rank => rank.uuid === playerUuid)
            if(resultRank.length && resultRank[0].rank === position) total += 1
        })
    })
    return total
}