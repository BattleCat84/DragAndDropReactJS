import React, { Component } from 'react';
import Chuspi from './SingleTarget/Chuspi';
import Container from './StressTest/Container';

export default class App extends Component {

  render(){
    return(
      <div>
          <Container />
          <Container />
          {/* <Chuspi orden="1"/>
          <Chuspi orden="2"/> */}
      </div>
    );
  }
  // <Container/>
  // <Container/>
  // <MyDragDropContext imagePosition={this.props.imagePosition} />
  // <MyDragDropContext imagePosition={this.props.imagePosition} />
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
