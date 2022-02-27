



const InputBase = (props)=>{

 const label = props.label;
  return (
    <div className='input-container'>
      <label>{label}</label>
    {props.children}
    </div>
  )
}

export default InputBase;
