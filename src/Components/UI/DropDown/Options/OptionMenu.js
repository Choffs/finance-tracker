import React, {useState, useEffect} from 'react';
import SideDropDown from '../SideDropDown';
import '../DropDown.css';


const GenerateOptionsSelected = (options)=>{
  let optionsObject ={};
  for(let option in options){
    optionsObject[options[option]] = true;
  }
  return optionsObject;
}


const OptionMenu = (props) =>{

  const [optionsSelected, setOptionsSelected] = useState((props.appliedFilters != null) ? props.appliedFilters[props.text] : GenerateOptionsSelected(props.options))


  const setOption = (name,selected) =>{
    setOptionsSelected((prevState)=>{
      const optionsCopy = {...prevState};
      optionsCopy[name] = selected;
      return optionsCopy;
    });
    return {}[name] = selected;
  }
 const toggleMenu = ()=>{
  props.toggleMenu(props.text);
 }
   useEffect(()=>{
     props.setOptions(props.text, optionsSelected);
   },[optionsSelected])

 const GetMenuOpen = ()=>{
   return (props.menuOpen.menu == props.text) ?
   <SideDropDown options={props.options} selected={optionsSelected} setOption={setOption}/>:
     null;
 }
 useEffect(()=>{
 });
  return (
    <div className='drop-down-option'>
    <div className='menu-close-box' onClick={toggleMenu}></div>
      <span className='material-icons'>arrow_back_ios</span>
      <p className='drop-down-option-text'>{props.text}</p>
    {GetMenuOpen()}
    </div>
  )
}
export default OptionMenu;
