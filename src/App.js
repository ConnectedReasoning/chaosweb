import React from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';
import ColoredRect from './components/coloredRect';
import './main.scss';

export default class App extends React.Component {
  constructor(props){
    super(props);
    //console.log('in App.constructor this.props is ', this.props);
    this.state={ 
      chaos: {}, 
      app:{}, 
    };
    this.refresh = this.refresh.bind(this);
  } 
  static getDerivedStateFromProps(nextProps, prevState){
    //console.log('in planzu.getDerivedStateFromProps  nextProps is ', nextProps);
    //console.log('in planzu.getDerivedStateFromProps  prevState is ', prevState);
    return{chaos: nextProps.chaos};
  }
  componentDidMount(){
    //console.log('in App.componentWicomponentDidMountllReceiveProps nextProps is ');
    this.props.initChaos();
    this.props.loadChaos();
  }
  refresh(){
      try {
        console.log('in app refresh');
        this.props.loadPlanzu();
      } catch(error){
        console.log('error in app error is ', error);
      }
  }
  render(){
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
}
