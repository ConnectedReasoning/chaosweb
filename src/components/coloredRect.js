import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

export default class ColoredRect extends React.Component {
  state = {
    color: 'green'
  };
  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor()
    });
  };
  render() {
    return (
      <Rect
        x={50}
        y={50}
        width={200}
        height={200}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
        onTap={this.handleClick}
      />
    );
  }
}