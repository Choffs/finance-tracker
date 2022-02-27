import InputBase from '../InputBase/InputBase';
import GenID from '../../../../Functions/UID';


const Text = (props)=>{
  const id = GenID(16);
  let text = props.defaultValue;
  const onFocus = ()=>{
    props.onFocus(id);
  }
  const onInputChange = (event)=>{
    text = event.target.value;
    if(typeof props.onTextChange === 'function'){
        props.onTextChange(text);
    }
  }
  return (
    <InputBase label={props.label}>
      <input
        id={id}
        className='ui-input txt-basic'
        onChange={onInputChange}
        onFocus={props.onFocus}
        type='text'
        placeholder={props.placeholder}
      />
    </InputBase>
  )
}

export default Text;
