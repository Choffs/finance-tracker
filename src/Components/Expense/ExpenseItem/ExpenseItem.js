import React, { useState } from 'react';
import Confirm from '../../UI/Dialog/Confirm/Confirm';
import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';


const ExpenseItem = (props)=>{
  const [showEdit, setShowEdit] = useState(false);
  const toggleShowEdit = ()=>{
    setShowEdit(!showEdit);
  }
  const item = props.item;
  const cost = Number(item.itemCost);
  const confirmDelete = ()=>{
    const confirm = (<Confirm
      header={'Delete ' + item.itemName + '?'}
      onConfirm={deleteItem}
      onCancel={props.closeModal}
      />)
        props.openModal(confirm);
  }
  const deleteItem = ()=>{
    props.closeModal();
    toggleShowEdit();
    props.deleteItem(item.id);
  }
  const editItem = ()=>{
    props.editItem(item)
  }

  const GetCost = ()=>{
    if (cost > 0){

    } else if (cost < 0){

    }
  }
return (
  <div
    className='expense-item-container'>
  <div className='expense-item-date'>
    <ExpenseDate date={item.dateBought}/>
  </div>
  <div className='expense-item-body'
      onClick={toggleShowEdit}
      >
    <div className='expense-item-name'><h2>{item.itemName}</h2></div>
    <div className='expense-item-location'>Location Purchased</div>
    <div className='expense-item-cost'><h2>{'($' + String(cost) +')'}</h2></div>
  </div>
  <div className={(showEdit) ? 'expense-item-edit show-edit': 'expense-item-edit'}>
    <div className='expense-item-edit-container'>
      <span className='material-icons expense-edit-close' onClick={toggleShowEdit}>close</span>
      <div className='expense-button-wrapper'>
        <div className='expense-item-button edit-button' onClick={editItem}>
          <span className="expense-icon material-icons">edit</span>
          <p>Edit</p>
        </div>
        <div className='expense-item-button delete-button' onClick={confirmDelete}>
          <span className="expense-icon material-icons">delete</span>
        <p>Delete</p>
      </div>
    </div>
    </div>
  </div>
</div>);

}

export default ExpenseItem;
