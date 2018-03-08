import React, { Component } from 'react';
import DD from './DD';
import InfoData from 'InfoData';

import './style.css';


const data1 = {
  type: 'Single Target',
  ddState :'Drag and Drop de un único objetivo',
  time:   ,
  difficulty: ,
};

 class InfoDD extends Component {

   constructor(){
   super();
   this.state = {
     dragAndDrop: 'Dustbin',
     data: data1
   };
  }

  render = () => {
    console.log("render");

    const { dragAndDrop, data } = this.state;
    return (
    <div className='InfoDDCont'>
        <DD dragAndDrop= {dragAndDrop}/>
        <InfoData data={data}/>
    </div>);
  };
}

export default InfoDD;
