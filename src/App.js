import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import './main.scss';

class ColoredRect extends React.Component {
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
        onTouchStart = {this.handleClick}
      />
    );
  }
}
function App() {
  return (
    <div className="App">
     <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect />
        </Layer>
      </Stage>
    </div>
  );
}

export default App;
