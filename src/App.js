import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";


  let Dummy_AppExpenses = [];
const App = () => {
  const [AppExpenses, setAppExpenses] = useState(Dummy_AppExpenses);
  const SaveInApp = (expenseObject) => {
   
    const updatedExpenses = [expenseObject, ...AppExpenses];
    console.log(updatedExpenses);
    setAppExpenses(updatedExpenses);
  };
  return (
    <div>
          <NewExpense FromApp={SaveInApp} />
      <Expenses Expenses={AppExpenses} />
    </div>
  );
};
export default App;
