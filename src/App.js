import React, {useState} from 'react';
import Modal from './Components/UI/Modal/Modal';
import './App.css';
import './style/input.css';
import Expense from './Components/Expense/Expense/Expense';

function App() {
  const [modal, setModal] = useState(null)


  const closeModal = ()=>{
    console.log("Close Modal");
    setModal(null);
  }

  const openModal = (data,title='Header')=>{
    const modal = (<Modal closeModal={closeModal} title={title}>{data}</Modal>)
    setModal(modal);
  }

  return (
    <div className="App" >
      {modal}
      <Expense openModal={openModal} closeModal={closeModal}/>
    </div>
  );
}

export default App;
