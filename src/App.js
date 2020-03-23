import React, {useState} from 'react';
import { Stage, Layer, Text } from 'react-konva';
import ColoredRect from './components/coloredRect';
import './main.scss';

const  App = (props) => {
  const [randomDigit, setRandomDigit] = useState(0);

  const handleClick = () =>{
    setRandomDigit(Math.random());
  }

  return (
    <div className="App" onClick={handleClick} onTap={handleClick}>
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text text="Try click on rect" />
          <ColoredRect digit={randomDigit} onClick={handleClick} onTap={handleClick}/>
        </Layer>
      </Stage>
    </div>
  );
}
export default App;
