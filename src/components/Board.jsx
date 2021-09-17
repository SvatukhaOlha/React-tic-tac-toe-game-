import React from 'react';
import Squeres from './Squeres';


// Stylings for red cross line
function getLineStyle(winner) {
  const variantsOfSteps = {
    '012': { top: '-20%', left: '50%', transform: 'rotate(90deg)', display: 'block' },
    '345': { top: '12%', left: '50%', transform: 'rotate(90deg)', display: 'block' },
    '678': { top: '45%', left: '50%', transform: 'rotate(90deg)', display: 'block' },
    '036': {top: '10%', left: '12%', transform: 'rotate(180deg)', display: 'block'},
    '147': {top: '10%', left: '50%', transform: 'rotate(180deg)', display: 'block' },
    '258': { top: '10%', left: '82%', transform: 'rotate(180deg)', display: 'block'},
    '048': {top: '-4%', height:'100%', right: '50%', transform: 'rotate(310deg)', display: 'block'},
    '246': { top: '-4%', height:'100%', right: '50%', transform: 'rotate(-310deg)', display: 'block'},
  };

  return variantsOfSteps[winner.join('')];
}

function Board({ squares, step, winner }) {
  return (
    <div className="table__box">
      <div className="table">
        <div className="red_line"/>
        {/* If someone win shows red cr9ij6toss line */}
        {winner && <div className="red_line" style={getLineStyle(winner)} />}
        {squares.map((item, index) => (
          /* Shows moving each player value('x' or 'o') , 
                    step(look function in the TicTacToe component)*/
          <Squeres key={index} value={item} onClick={() => step(index)} />
        ))}
      </div>
    </div>
  );
}

export default Board;
