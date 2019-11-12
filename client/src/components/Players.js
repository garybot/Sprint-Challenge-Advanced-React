import React, { useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';
import PlayerCard from './PlayerCard.js';

const Players = (props) => {
  const [players, setPlayers] = useLocalStorage('players', []);

  useEffect(() => {
    if (!players.length) {
      setPlayers(props.list);
    }
  })

  return (
    <div className='player-list'>
      {
        players.map((player, index) => <PlayerCard key={index} player={player} />)
      }    
    </div>
  )
}

export default Players