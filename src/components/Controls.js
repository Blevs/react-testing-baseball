import React from 'react';

const Controls = (props) => {
  return (
    <div>
      <button onClick={props.strike}>strike</button>
      <button onClick={props.ball}>ball</button>
      <button onClick={props.foul}>foul</button>
      <button onClick={props.hit}>hit</button>
    </div>
  );
};

export default Controls;
