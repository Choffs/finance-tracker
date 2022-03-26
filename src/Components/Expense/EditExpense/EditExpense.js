import Text from '../../UI/Input/Text/Text';
import NumberInput from '../../UI/Input/Number/NumberInput';
import DatePicker from '../../UI/Input/DatePicker/DatePicker';

import './EditExpense.css';



const EditExpense=(props)=>{
  const defaultItem = props.item;
  let itemName = props.item.itemName;
  let itemCost = props.item.itemCost;
  let dateBought = props.item.dateBought.toISOString().split('T')[0];
  const onNumberChange = (cost)=>{
    itemCost = cost;
  }
  const onTextChange = (text)=>{
    itemName = (text.length > 0) ? text : defaultItem.itemName;
  }
  const onDateSelected = (date) =>{
    dateBought = date;
  }

    const onConfirm=()=>
    {
      const item = {
        id: props.item.id,
        itemName: itemName,
        itemCost: itemCost,
        dateBought: new Date(dateBought.replace(/-/g,'/'))
      }
      props.onConfirm(item);
    }
  return (
    <div className='edit-expense'>
      <div className='edit-expense-control'>
        <Text label='Desription'
          placeholder={itemName}
          defaultValue={itemName}
          onTextChange={onTextChange}/>
      </div>
      <div className='edit-expense-control'>
        <NumberInput
          label='Cost'
          placeholder={itemCost}
          onChangeNumber={onNumberChange}
        />
      </div>
      <div className='edit-expense-control'>
        <DatePicker label='Date'
          placeholder={dateBought}
          onDateSelected={onDateSelected}/>
      </div>
      <button className='btn-basic btn-confirm' onClick={onConfirm}>Confirm</button>
    </div>
      )
}

export default EditExpense;
