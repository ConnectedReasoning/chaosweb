import React from 'react';
import { Rect } from 'react-konva';
import Konva from 'konva';

const  ColoredRect = (props) =>  {
  return (
    <Rect
      x={ Math.random() * (window.innerWidth - 200)}
      y={ Math.random() * (window.innerHeight - 200)}
      width={20 +  Math.random() * 200}
      height={ 20 + Math.random() * 200 }
      fill={Konva.Util.getRandomColor()}
      shadowBlur={2}
      onClick={props.handleClick} 
      onTap={props.handleClick}
    />
  );
}
export default ColoredRect;
