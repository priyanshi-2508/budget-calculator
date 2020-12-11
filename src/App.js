
import React, {useState} from 'react';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import ExpenseList from './components/ExpenseList'
import ExpenseItem from './components/ExpenseItem';
import uuid from 'uuid/dist/v4'
const initialExpenses = [
  {id:uuid(),charge:"rent",amount:1600},
  {id:uuid(),charge:"car payment",amount:500},
  {id:uuid(),charge:"credit card bill",amount:1300}
]
//console.log(initialExpenses)

//import useState()

function App() {
  //const result = useState(initialExpenses);
  //const expenses = result[0];
  //const setExpenses = result[1];
  //console.log(expenses,setExpenses);

  const [expenses,setExpenses] = useState(initialExpenses);
  // console.log(expenses);

  return (
    //<>
    //<Alert></Alert>
    //<ExpenseList></ExpenseList>
    //<ExpenseForm></ExpenseForm>
    //<ExpenseItem></ExpenseItem>
    //</>
    <div>
      <Alert />
      <h1>Budget Calculator</h1>
      <main className="App">
        <ExpenseList />
        <ExpenseForm /> 
      </main>
    </div>

    );
}

export default App;
