import React from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

export default class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  displayRandom = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={ Math.random() * (window.innerWidth - 100)}
        y={ Math.random() * (window.innerHeight - 100)}
        width={20 +  Math.random() * 100}
        height={ 20 + Math.random() * 100 }
        fill={Konva.Util.getRandomColor()}
        shadowBlur={5}
        //r = {Math.floor(Math.random() * 256)}
        //g = {Math.floor(Math.random() * 256)}
        //b = {Math.floor(Math.random() * 256)"

      />
    );
  }
}