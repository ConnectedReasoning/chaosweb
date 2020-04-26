import React, {useState} from 'react';
import { Stage, Layer, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from './components/coloredRect';
import './main.scss';

const  App = (props) => {
  const [randomDigit, setRandomDigit] = useState(0);
  const [squares, setSquares] = useState([]);

  const handleClick = () =>{
    const tempSquares = squares;
    const newSquare = {x:Math.random(), y:Math.random(), height:Math.random(), width:Math.random(), color:Konva.Util.getRandomColor()};
    tempSquares.push(newSquare);
    setSquares([...tempSquares]);

  }
  return (
    <div className="App" onClick={handleClick} onTap={handleClick}>
 
    <Stage className="stage" width={window.innerWidth} height={window.innerHeight}  >
        <Layer >
          <Text text={`Try click on rect`} />

          {
            squares.map(square =>{

              return <ColoredRect square={square} />
            })
  
          }
        </Layer>
      </Stage>
    </div>
  );
}
export default App;
