import React, {useState} from 'react';
import InputBase from '../InputBase/InputBase';


const DatePicker = (props)=>{
  const [value, setValue] = useState(props.placeholder);

  const dateSelected = (event)=>{
    const dateSelectHandler = props.onDateSelected;
    setValue(event.target.value);
    if(dateSelectHandler){
      dateSelectHandler(event.target.value);
    }
  }
  return (
    <InputBase label={props.label}>
      <input
        className='ui-input input-date-picker txt-basic'
        type='date'
        onChange={dateSelected}
        placeholder={props.placeholder}
        value={value}
      />
    </InputBase>
  )
}

export default DatePicker;
