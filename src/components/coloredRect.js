import React from 'react';
import { Rect } from 'react-konva';


const  ColoredRect = (props) =>  {
  console.log('in coloredRect props is ', props);
  return (
    <Rect
      x={ props.square.x * (window.innerWidth - 200)}
      y={ props.square.y * (window.innerHeight - 200)}
      width={20 +  props.square.width * 200}
      height={ 20 + props.square.height * 200 }
      fill={props.square.color}
      shadowBlur={2}
      onClick={props.handleClick} 
      onTap={props.handleClick}
    />
  );
}
export default ColoredRect;
