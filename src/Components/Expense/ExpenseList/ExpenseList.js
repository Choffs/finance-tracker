import ExpenseItem from '../ExpenseItem/ExpenseItem';
import EditExpense from '../EditExpense/EditExpense';

import './ExpenseList.css';

const ExpenseList = (props)=>{

  const deleteExpenseItem = (id)=>{
      props.deleteItem(id);
  }
  const editExpenseItem = (item)=>{
      props.openModal(<EditExpense item={item} onConfirm={props.editItem}/>, `Edit ${item.itemName}`);
  }
  const list = (props.list) ? props.list.map((item, index)=>{
    return(
    <div key={item.id} className='expense-list-item-wrapper'>
      <ExpenseItem item={item}
      deleteItem={deleteExpenseItem}
      editItem={editExpenseItem}
      openModal={props.openModal}
      closeModal={props.closeModal}
    />
  </div>)
  }) : null;

  if(list.length === 0){
    return <div className='expense-list-empty'>
    <h2> List Is Empty :(</h2>
    </div>
  }
  return <div className={`expense-list ${props.className}`}>
      {list}
      </div>
    

}

export default ExpenseList;
