import Text from '../../UI/Input/Text/Text';
import NumberInput from '../../UI/Input/Number/NumberInput';
import DatePicker from '../../UI/Input/DatePicker/DatePicker';

import './AddExpense.css';


const AddExpense = (props)=>{
  let description = '';
  let price = 0;
  let date = '';

  const descriptionTextUpdate = (text)=>{
    description = text;
  }
  const priceUpdate = (inPrice)=>{
    price = inPrice;
  }

  const dateUpdate = (inDate)=>{
    date = inDate;
  }

  const createExpense = ()=>{
    const item = {
      id: Math.random(),
      itemName: description,
      itemCost: price,
      dateBought: new Date(date),
    };
    props.createExpense(item);
  }
  return (
  <div className='add-expense'>
    <div className='add-expense-control'>
      <Text label={'Desription'} onTextChange={descriptionTextUpdate}/>
    </div>
    <div className='add-expense-control'>
      <NumberInput
        label={'Price'}
        onChangeNumber={priceUpdate}
        min={'0'}
        step={'0.1'}
      />
    </div>
    <div className='add-expense-control'>
      <DatePicker label={'Date'} onDateSelected={dateUpdate}/>
    </div>
    <div className='add-expense-control'>
      <button className='btn-basic' onClick={createExpense}>Add Expense</button>
    </div>
  </div>
)
}

export default AddExpense;
