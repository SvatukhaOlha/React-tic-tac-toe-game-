import React  from 'react'
import { useHistory } from "react-router-dom";

function Start() {
const history = useHistory();

    /* Shows link path (e.g. http://localhost:3000/game)
    and opens game page (TicTacToe component) */
    function startGame() {
        return(
            history.push('/game')
        )
    }

    return (
        <div className='App'>
            <h1>Tic-Tac-Toe Game</h1>
            <h3>Choose a player</h3>
            <div className="start__btn">
                <button onClick={startGame}
                className='start_btn_player'>Player 1</button>
                <button onClick={startGame}
                className='start_btn_player'>Player 2</button>
            </div>
        </div>
    )
}

export default Start
