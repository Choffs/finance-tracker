import React, { useState, useEffect } from 'react';
import OptionMenu from './Options/OptionMenu';
import SideDropDown from './SideDropDown';
import './DropDown.css';

const DropDown = (props)=>{

  const [optionMenuOpen, setOptionMenuOpen] = useState({menu: null})
  const [currentOptions, setCurrentOptions] = useState((props.appliedFilters != null) ? props.appliedFilters : {'Years': {}, "Months" : {}});


  const setOptions = (name, options)=>{
    setCurrentOptions((prevState)=>{
      let tmpOptions = {...prevState};
      tmpOptions[name] = options;
      return tmpOptions;
    });
  }

  useEffect(()=>{
    props.setFilters(currentOptions);
  },[currentOptions])

  const months = Object.keys(props.filters[1]);
  const years = Object.keys(props.filters[0]);

  const ToggleMenu = (name)=>{
    if(optionMenuOpen.menu == name){
      setOptionMenuOpen({menu: null});
      return false;
    }else {
      setOptionMenuOpen({menu: name});
      return true;
    }
  }
  return (
    <>
    <div className='close-box' onClick={props.toggleMenu}></div>
    <div className='drop-down'>
      <menu className='drop-down-menu'>
        <div className='drop-down-list'>
          <div className='drop-down-option'>
            <p className='drop-down-option-text'>Year</p>
          </div>
          <OptionMenu options={years.reverse()} text='Years' setOptions={setOptions} menuOpen={optionMenuOpen} toggleMenu={ToggleMenu} appliedFilters={props.appliedFilters}/>
          <OptionMenu options={months} text='Months' setOptions={setOptions} menuOpen={optionMenuOpen} toggleMenu={ToggleMenu} appliedFilters={props.appliedFilters} />
        </div>
      </menu>
    </div>
  </>
  )
}

export default DropDown;
