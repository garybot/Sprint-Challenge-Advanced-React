import React from 'react';

const PlayerCard = (props) => {
  return (
    <div className='player-card'>
      <h2>Name: {props.player.name}</h2>
      <h3>Country: {props.player.country}</h3>
    </div>
  )
}

export default PlayerCard