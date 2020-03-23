import React from 'react';
import { Stage, Layer, Text } from 'react-konva';
import ColoredRect from './components/coloredRect';
import './main.scss';

export default class App extends React.Component {
  constructor(props){
    super(props);
    //console.log('in App.constructor this.props is ', this.props);
    this.state={ 
      chaos: {}, 
      app:{}, 
      randig:0
    };
    this.refresh = this.refresh.bind(this);
    this.handleClick = this.handleClick.bind(this);
  } 
  static getDerivedStateFromProps(nextProps, prevState){
    //console.log('in planzu.getDerivedStateFromProps  nextProps is ', nextProps);
    //console.log('in planzu.getDerivedStateFromProps  prevState is ', prevState);
    return{chaos: nextProps.chaos};
  }
  handleClick(){
    console.log('clicked');
    this.setState({randig:Math.random()});

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
      <div className="App" onClick={this.handleClick} onTap={this.handleClick}>
      <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Text text="Try click on rect" />
            <ColoredRect digit={this.state.randig}/>
          </Layer>
        </Stage>
      </div>
    );
  }
}
