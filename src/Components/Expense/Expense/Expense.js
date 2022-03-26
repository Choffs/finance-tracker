import React, {useState, useEffect, useMemo} from 'react';
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpenseToolbar from '../ExpenseToolbar/ExpenseToolbar';
import BuildFilterList, {BuildListBase, FilterRelevent} from './FilterList';
import './Expense.css';


const FAKELIST = [

  {
    id: '156415',
    itemName: 'Car Insurance',
    itemCost: 200.16,
    dateBought: new Date('June 02, 2022 08:22:00')
  },
  {
    id: '156416',
    itemName: 'Pizza',
    itemCost: 48.95,
    dateBought: new Date('May 05, 2022 17:44:23')
  },
  {
    id: '156411',
    itemName: 'Playstation 5',
    itemCost: 1299.44,
    dateBought: new Date('June 15, 2022 10:38:22')
  }
]
const listBase = BuildListBase();

const Expense = (props)=>{
  const [expenses, setExpenses] = useState(FAKELIST);

  const [appliedFilters, setAppliedFilters] = useState(null);
  const [searchText, setSearchText] = useState('');

  const filterOptions = useMemo(()=>BuildFilterList(expenses,listBase),[expenses]);
  const relevantFilters = useMemo(()=>FilterRelevent(filterOptions),[filterOptions]);


  const createExpenseItem = (item)=>{
    if(typeof item === 'object'){
      if(item.itemName.length  !== 0 && item.itemCost !== 0){
        setExpenses((prevState)=>{return [item, ...prevState]});
      }
    }
    props.closeModal();
  }

  const deleteExpenseItem = (id)=>{
    setExpenses(expenses.filter((item)=>{return item.id !== id}));
  }

  const editExpenseItem = (item)=>{
    let expensesCpy = [...expenses];
    for(var idx = 0; idx < expensesCpy.length; idx++){
      if(item.id === expensesCpy[idx].id){
        expensesCpy[idx] = item;
        break;
      }
    }
    props.closeModal();
    setExpenses(expensesCpy);
  }

  const filteredList = useMemo(()=>{

    return expenses.filter(item=>{
      let itemInFilter = true;
        if(appliedFilters){
          itemInFilter = appliedFilters.Years[String(item.dateBought.getFullYear())] &&
          appliedFilters.Months[item.dateBought.toLocaleString('en-US', {month: 'long'})]
        }
        if(searchText.length > 0) return itemInFilter && item.itemName.toLowerCase().includes(searchText.toLowerCase());
        return itemInFilter;
    })
  }, [appliedFilters, expenses, searchText]);

  return (
    <div className='expense'>
      <ExpenseToolbar createExpense={createExpenseItem}
        openModal={props.openModal}
        closeModal={props.closeModal}
        filters={relevantFilters}
        setFilters={setAppliedFilters}
        appliedFilters={appliedFilters}
        setSearchText={setSearchText}
         />
    <ExpenseList
      list={filteredList}
      openModal={props.openModal}
      closeModal={props.closeModal}
      deleteItem={deleteExpenseItem}
      editItem={editExpenseItem}
      />
    </div>
)
}

export default Expense;
