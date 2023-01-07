import React from 'react';

import "./GameCard.scss"

import Card from '../../card/Card';

import { gameType, playerType } from '../../../types/data';
import { getPlayerLabel, getPlayerProfile } from '../../../utils/lib';
import Avatar from '../../avatar/Avatar';
import AvatarGroup from '../../avatar/AvatarGroup';

export interface GameCardProps{
    game: gameType,
    players: playerType[],
    changeGameData: (arg0: gameType, arg1: string) => void,
    setCurrentGame: React.Dispatch<React.SetStateAction<{game: gameType|undefined, edit: boolean}>>
    active: boolean
}

const GameCard = (props: GameCardProps) => {
    const renderPlayers = () => {
        return (<AvatarGroup max={3}>
                {
                    props.game.rankHistory[props.game.rankHistory.length-1].playersRank.sort((a, b) => a.score < b.score ? 1 : -1).map((player,index) => {
                        const playerProfile = getPlayerProfile(props.players,player.playerUuid)
                        return <Avatar label={getPlayerLabel(playerProfile)} color={playerProfile.color} key={index}/>
                    })
                }
              </AvatarGroup>)
    }

    return (
    <>
        <div className={`game-card ${props.active?'active':''}`} onClick={() => props.setCurrentGame({game: props.game, edit: false})}>
            <p>{props.game.gamename}</p>
            <div className='game-card-stats'>
                {/* <p>{props.game.results.length} results</p> */}
                {renderPlayers()}
            </div>
        </div>
        <div className={`game-card-outside-name-container ${props.active?'active':''}`}>
            <div className='game-card-outside-name'>{props.game.gamename}</div>
        </div>
    </>
  );
}

export default GameCard;