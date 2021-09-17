import React  from 'react'

// Shows total score each player
function Score({xScore, oScore }) {

    return (
        <div className='score'>
            <h1>Score</h1>
            <h3>Player 1:{xScore}</h3>
            <h3>Player 2:{oScore} </h3>
        </div>
    )
}

export default Score
