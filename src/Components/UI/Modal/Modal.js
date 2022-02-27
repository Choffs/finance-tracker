import React from 'react';
import './Modal.css';

const Modal = (props)=>{

  const getData = ()=>{
    const data = props.children;
    console.log(typeof data);
    if(typeof data === 'object' && React.isValidElement(data)){
      return data;
    }
    return (<div>Error</div>)
  }
  return (
    <div className='modal-container'>
      <div className='modal-close-box' onClick={props.closeModal}></div>
      <div className='modal'>
        <div className='modal-header'><h2 className='modal-header-title'>{props.title}</h2><span className='material-icons modal-header-close' onClick={props.closeModal}>close</span></div>
        {getData()}
      </div>
    </div>
)
}

export default Modal;
