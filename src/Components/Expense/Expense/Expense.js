import React, {useState, useEffect} from 'react';
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

const Expense = (props)=>{
  const [expenses, setExpenses] = useState(FAKELIST);
  const [filteredList, setFilteredList] = useState(expenses);
  const [listBase, setListBase] = useState(BuildListBase())
  const [filterOptions, setFilterOptions] = useState(BuildFilterList(FAKELIST,listBase));
  const [relevantFilters, setRelevantFilters] = useState(FilterRelevent(filterOptions));
  const [appliedFilters, setAppliedFilters] = useState(null);
  const [searchText, setSearchText] = useState('');

  const createExpenseItem = (item)=>{
    if(typeof item === 'object'){
      if(item.itemName.length  != 0 && item.itemCost != 0){
        setExpenses((prevState)=>{return [item, ...prevState]});
      }
    }
    closeModal();
  }

  const deleteExpenseItem = (id)=>{
    const tmpList = expenses.filter((item)=>{return item.id != id});
    setExpenses(tmpList);
  }

  const editExpenseItem = (item)=>{
    let expensesCpy = [...expenses];
    for(var idx = 0; idx < expensesCpy.length; idx++){
      if(item.id === expensesCpy[idx].id){
        expensesCpy[idx] = item;
        break;
      }
    }
    setExpenses(expensesCpy);
  }

  useEffect(() => {
    setFilterOptions(BuildFilterList(expenses,listBase));
  },[expenses]);

  useEffect(() => {
    setRelevantFilters(FilterRelevent(filterOptions));
  }, [filterOptions]);

  useEffect(() => {
    refreshFilterList();
  },[relevantFilters]);

  useEffect(()=>{
    refreshFilterList();
  }, [appliedFilters,searchText]);

  const refreshFilterList = ()=>{
    if(appliedFilters){
    let tmpList = [...expenses];
    tmpList = tmpList.filter(item=>{
      let filterFlag = false;
        filterFlag = appliedFilters.Years[String(item.dateBought.getFullYear())] &&
        appliedFilters.Months[item.dateBought.toLocaleString('en-US', {month: 'long'})] &&
        item.itemName.toLowerCase().includes(searchText.toLowerCase());
      return filterFlag;
    })
    setFilteredList(tmpList);
    }
  }
  const openModal = (data,title)=>{
    props.openModal(data,title);
  }
  const closeModal = ()=>{
    props.closeModal();
  }
  return (
    <div className='expense'>
      <ExpenseToolbar createExpense={createExpenseItem}
        openModal={openModal}
        closeModal={closeModal}
        filters={relevantFilters}
        setFilters={setAppliedFilters}
        appliedFilters={appliedFilters}
        setSearchText={setSearchText}
         />
    <ExpenseList
      list={filteredList}
      openModal={openModal}
      closeModal={closeModal}
      deleteItem={deleteExpenseItem}
      editItem={editExpenseItem}

      />
    </div>
)
}

export default Expense;
