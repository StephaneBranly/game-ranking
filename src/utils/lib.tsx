import { playerType } from "../types/data"

export const getPlayerProfile = (players: Array<playerType>, uuidPlayer: string) => {
    return (players.filter(player => (player.uuid === uuidPlayer))[0])
}

export const getPlayerLabel = (player: playerType) => {
    if(player.username.length>1)
        return player.username[0].toUpperCase()+player.username[1];
    player.username[0].toUpperCase();
}
