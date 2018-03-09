import React, { Component } from 'react';
import { render } from 'react-dom';
import MyDragDropContext from './MyDragDropContext';
import { observe } from './Game';

const observar = () => {
  observe(imagePosition =>
    render(
      <MyDragDropContext imagePosition={imagePosition} />,
      document.getElementById('mi-ejemplo')
    )
  );
};

export default class Chuspi extends Component {
  componentDidMount(){
    observar();
  }

  render(){
    return(
        <div id="mi-ejemplo">

        </div>
    );
  }
}
