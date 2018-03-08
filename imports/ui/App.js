import React, { Component } from 'react';
//import WeatherLocation from './WeatherLocation';
import MyDragDropContext from './SingleTarget/MyDragDropContext';
import { observe } from './SingleTarget/Game';
import Container from './StressTest/Container';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Container/>
        <Container/>
        <MyDragDropContext imagePosition={this.props.imagePosition} />
        <MyDragDropContext imagePosition={this.props.imagePosition} />
      </div>
    );
  }
  // <Container/>
  // { this.state.observador ?
  // <MyDragDropContext imagePosition={this.state.imagePosition} /> :
  // <div></div> }

  // render() {

  //   return (
  //     <div className= "App">
  //     {/*<InfoDD/>*/}
  //
  //     {/* como implementar el observer y el imagePosition del singleTarget (estaba antes en el main.js)*/}
  //     {/* observe(imagePosition =>
  //         render(
  //           <SingleTarget imagePosition={imagePosition} />,
  //           document.getElementById('render-target')*/}
  //
  //     <SingleTarget/>
  //
  //     {/* <StressTes/> */}
  //     </div>
  //   );
  // }
}
