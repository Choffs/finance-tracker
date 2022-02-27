import React, {useState} from 'react';
import Modal from './Components/UI/Modal/Modal';
import './App.css';
import './style/input.css';
import ExpenseList from './Components/Expense/ExpenseList/ExpenseList';
import Expense from './Components/Expense/Expense/Expense';

const FAKELIST = [
  { itemName: 'Car Insurance',
    itemCost: -200.16,
    dateBought: new Date('June 02, 2022 08:22:00')
  },
  { itemName: 'Pizza',
    itemCost: -48.95,
    dateBought: new Date('May 05, 2022 17:44:23')
  },
  { itemName: 'Playstation 5',
    itemCost: -1299.44,
    dateBought: new Date('June 15, 2022 10:38:22')
  }
]
function App() {
  const [state, setState] = useState({currentmodal : null})


  const closeModal = ()=>{
    console.log("Close Modal");
    setState({currentModal: null});
  }

  const openModal = (data,title='Header')=>{
    const modal = (<Modal closeModal={closeModal} title={title}>{data}</Modal>)
    setState({currentModal: modal});
  }

  return (
    <div className="App" >
      {state.currentModal}
      <Expense openModal={openModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
