import React, {useState, useEffect} from 'react';

import '../DropDown.css';



const OptionSelect = (props) =>{
  const ui_icon = (props.selected) ?  'check_box' : 'check_box_outline_blank'
  const dropOptionClasses = (props.selected) ? 'drop-down-option drop-option-selected' : 'drop-down-option';

  const toggleSelect = ()=>{
    props.onSelect(props.option,!props.selected);
  }
return (
  <div className={dropOptionClasses} onClick={toggleSelect}>
    <span className="material-icons">
      {ui_icon}
    </span>
    <p className='drop-down-option-text'>{props.option}</p>
  </div>
)
}

export default OptionSelect;
