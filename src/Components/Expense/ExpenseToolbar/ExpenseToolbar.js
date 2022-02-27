import AddExpense from '../AddExpense/AddExpense';
import Text from '../../UI/Input/Text/Text';

import Filter from '../Filter/Filter';
import './ExpenseToolbar.css';


const ExpenseToolbar = (props)=>{


  const openModal = (data)=>{
    props.openModal(data);
  }
  const closeModal = ()=>{
    props.closeModal();
  }

  const openAddExpense = ()=>{
    const addExpenseElem = (
      <AddExpense createExpense={props.createExpense} />
    )
    openModal(addExpenseElem);
  }
return (
    <div className='expense-toolbar'>
      <div id='icon-add-expense' className='expense-toolbar-icon-wrapper'onClick={openAddExpense}>
        <span className='material-icons expense-toolbar-icon' >add_circle</span>
      </div>
      <div  className='expense-toolbar-search'>
        <Filter filters={props.filters} setFilters={props.setFilters} appliedFilters={props.appliedFilters} setSearchText={props.setSearchText} />
      </div>
  </div>
  )
}

export default ExpenseToolbar;
