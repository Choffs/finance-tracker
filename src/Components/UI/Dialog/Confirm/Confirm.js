import './Confirm.css'


const Confirm = (props)=>{

  return (
    <div className='confirm-container'>
      <div className='confirm-header'>
        <h2>{props.header}</h2>
      </div>
      <div className='confirm-btn-wrapper'>
        <button className='confirm-btn-option btn-basic' onClick={props.onConfirm}>Confirm</button>
        <button className='cancel-btn-option btn-basic' onClick={props.onCancel}>Cancel</button>
      </div>
    </div>
  )
}

export default Confirm;
