import React, { Component } from 'react';
import { ItemTypes } from './Constants.js';
import { DragSource } from 'react-dnd';

const ImageSource = {
  beginDrag(props){
    return{};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
//La imagen que se muesta en la parte derecha
class MyImage extends Component {

  render(){
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        textAlign: 'center'
      }}>
        <img src="th2.jpg" alt="th" />
      </div>
    );
  }
}
//Drag es el elemento que se arrastra
export default DragSource(ItemTypes.IMAGE, ImageSource, collect)(MyImage);
