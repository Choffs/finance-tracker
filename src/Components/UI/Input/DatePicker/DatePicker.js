import React, {useState, useEffect} from 'react';
import InputBase from '../InputBase/InputBase';


const DatePicker = (props)=>{
  const [value, setValue] = useState(props.placeholder);

  const dateSelected = (event)=>{
    setValue(event.target.value);
  }
  useEffect(() => {
    const dateSelectHandler = props.onDateSelected;
    if(dateSelectHandler){
      dateSelectHandler(value);
    }
  },[value])
  return (
    <InputBase label={props.label}>
      <input
        className='ui-input input-date-picker txt-basic'
        type='date'
        onChange={dateSelected}
        value={value}
      />
    </InputBase>
  )
}

export default DatePicker;
