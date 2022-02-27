import React, { useState, useEffect } from 'react';
import OptionSelect from './Options/OptionSelect';
import './DropDown.css';


const SideDropDown = (props)=>{


const options = props.options;

const  onSelect = (option, isSelected)=>{
  props.setOption(option, isSelected);
}


const GetOptions = ()=>{
  let elemArr = []
  for(let option of props.options){
    elemArr.push(
      <OptionSelect onSelect={onSelect} key={option} option={option} selected={props.selected[option]}/>
    );
  }
  return elemArr;
}

return (
    <div className='side-drop'>
    {GetOptions()}
    </div>
  )

}

export default SideDropDown;


//      <span className='material-icons'>check-box-outline-blank</span>
