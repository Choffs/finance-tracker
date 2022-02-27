import React, { useState } from 'react';
import Text from '../../UI/Input/Text/Text';
import DropDown from '../../UI/DropDown/DropDown';
import './Filter.css';




const Filter = (props)=>{
  const filterOptions = props.filterOptions;
  const [filterClass, setFilterClass] = useState('filter-search');
  const [showDropDown, setShowDropdown] = useState(false);
  const onFocus = (id)=>{
    setFilterClass('filter-search filter-search-focused');
  }
  const loseFocus = ()=>{
    setFilterClass('filter-search');
  }

  const toggleDropDown = ()=>{
    setShowDropdown(!showDropDown);
  }
  const onSearch = (text)=>{
    props.setSearchText(text);
  }
  const getDropdown = ()=>{
    return (showDropDown) ? <DropDown filters={props.filters} setFilters={props.setFilters} appliedFilters={props.appliedFilters} toggleMenu={toggleDropDown}/> : null;
  }
  return (
    <div className={filterClass}>
      <div onFocus={onFocus} onBlur={loseFocus} className='filter-search-wrapper'>
        <Text
        onTextChange={onSearch}
        placeholder='Search...'
        />
      </div>
      <div className='filter-icon-wrapper'>
        <span id='icon-filter-list' className='material-icons expense-toolbar-icon' onClick={toggleDropDown}>filter_list</span>
      {getDropdown()}
      </div>

    </div>
  )
}

export default Filter;
