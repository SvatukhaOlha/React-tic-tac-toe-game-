import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gameRule } from '../gameRule';
import Board from './Board';
import Score from './Score';

export default function TicTacToe(props) {
  const history = useHistory();
  let [squares, setSquares] = useState(
    Array(9).fill('')
  ); /* creates the game board */
  const [turn, setTurn] = useState(true); /* move 'x' or 'o' */
  const winner =
    gameRule(squares); /* game rule - look at the gameRule.js file */
  const [score, setScore] = useState(0); /* count score */
  const [xScore, setXscore] =
    useState(score); /* pearsonal score of player #1 */
  const [oScore, setOscore] =
    useState(score); /* pearsonal score of player #2 */
  let newSquares = [...squares];

  // Set up the moving rule
  const step = (index) => {
    // If the square already is busy you can't move
    if (newSquares[index] !== '') {
      alert(`you can't go here this square is busy`);
      return;
    }
    // First move 'x' then 'o'
    newSquares[index] = turn ? 'x' : 'o';
    setSquares(newSquares);
    setTurn(!turn);
  };

  // Check the game result
  useEffect(() => {
    // If someone won - reset all squares in 1.5 sec
    if (winner) {
      setTimeout(() => setSquares(Array(9).fill('')), 1500);
    }
    // If player #1 won
    if (winner && !turn) {
      setXscore(xScore + 1);
    }
    // If player #2 won
    if (winner && turn) {
      setOscore(oScore + 1);
    }
    // Runs if it's a draw and reset squares in 1.5 sec
    if (newSquares.indexOf('') === -1 && !winner) {
      alert(`It's a draw!`);
      setTimeout(() => setSquares(Array(9).fill('')), 1500);
    }
  }, [squares]);

  // Goes back to the start page (Start component)
  const routeChange = () => {
    history.goBack();
  };

  return (
    <div className=" App tictoctoe">
      <div className="tictoctoe_tex_box">
        <h1>Tic Tac Toe</h1>
        {/* Shows winner here */}
        {winner && <h1>{`${turn ? 'o' : 'x'} won!`}</h1>}
        <div className="tictoctoe_box">
          <Board squares={squares} step={step} winner={winner} />
          <Score key={winner} xScore={xScore} oScore={oScore} />
        </div>
        {/* Goes back to start (Start component) */}
        <button onClick={routeChange} className="start_btn_back">
          Go back
        </button>
        {/* Resets squares and score each player */}
        <button
          onClick={function () {
            setTimeout(() => setSquares(Array(9).fill('')), 100);
            setXscore(0);
            setOscore(0);
          }}
          className="start_btn_back"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
