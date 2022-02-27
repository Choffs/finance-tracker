import InputBase from '../InputBase/InputBase';

const NumberInput = (props)=>{

  const onChangeNumber = (event)=>{
    const numberChangeHandler = props.onChangeNumber;
    if(numberChangeHandler){
      numberChangeHandler(event.target.value);
    }
  }
  return (
    <InputBase label={props.label}>
      <input
         className='ui-input input-number txt-basic'
         type='number'
         step={props.step}
         min={props.min}
         onChange={onChangeNumber}
         placeholder={props.placeholder}
      />
    </InputBase>
    )

}

export default NumberInput;
