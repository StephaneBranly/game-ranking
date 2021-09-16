import { playerType } from "../types/data"

export const getPlayerProfile = (players: Array<playerType>, uuidPlayer: string) => {
    return (players.filter(player => (player.uuid === uuidPlayer))[0])
  }
