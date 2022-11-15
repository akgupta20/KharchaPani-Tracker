import './App.css'
import React, { useState, useEffect } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import FilterExpenses from './Components/Expenses/FilterExpenses'
import NoResultFound from './Components/Expenses/NoResultFound'
import Particle from './Components/Particle';
import Header from './Components/Header'

let updatedExpenses;

const getLocalItem = () => {
  let AppExpensesDataInLocalStrogeKey = localStorage.getItem('AppExpensesDataInLocalStrogeKey');
  if (AppExpensesDataInLocalStrogeKey)
    return JSON.parse(AppExpensesDataInLocalStrogeKey);
  return [];
}


const App = () => {
  const [FilterUpdatedExpenses, setFilterUpdatedExpenses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [AppExpenses, setAppExpenses] = useState(getLocalItem());
  const [AppTheme, setAppTheme] = useState("light-theme");
  const [SearchingResult, setSearchingResult] = useState('');

  const SaveThemeInApp = () => AppTheme === "light-theme" ?
    setAppTheme("dark-theme") : setAppTheme("light-theme");
  useEffect(() => {
    document.body.className = AppTheme;
  }, [AppTheme]);

  const backButtonHandler = () => {
    setSearchingResult('');
  }

  const SaveInApp = (expenseObject) => {
    updatedExpenses = [expenseObject, ...AppExpenses];
    setAppExpenses(updatedExpenses);

  };

  useEffect(() => {
    let tamount = 0;
    for (let i = 0; i < AppExpenses.length; i++)
      tamount += Number(AppExpenses[i].amount);
    setTotalAmount(tamount);
  }, [AppExpenses])


  const SaveInAppToExpense = (deleteExpense) => {
    updatedExpenses = AppExpenses.filter(Expense => Expense.id !== deleteExpense.id);
    setAppExpenses(updatedExpenses);
    updatedExpenses = FilterUpdatedExpenses.filter(Expense => Expense.id !== deleteExpense.id);
    setFilterUpdatedExpenses(updatedExpenses);
  };

  const FilterAndSaveInApp = (filterExpenseName) => {
    setSearchingResult(filterExpenseName);
    updatedExpenses = AppExpenses.filter(Expense => Expense.title === filterExpenseName.toLocaleUpperCase());
    setFilterUpdatedExpenses(updatedExpenses);

  }

  useEffect(() => {
    localStorage.setItem('AppExpensesDataInLocalStrogeKey', JSON.stringify(AppExpenses));
  }, [AppExpenses]
  );


  if (SearchingResult !== '') {
    let temp = 0;
    if (FilterUpdatedExpenses.length === 0)
      return (
        <div>
          <Particle />
          <Header FromApp={SaveThemeInApp} FromAppForFilter={FilterAndSaveInApp} searchingTitleFromApp={SearchingResult} />
          <div className='backAndTheme'>
            <button onClick={backButtonHandler} title='Back'><i className="fa fa-arrow-circle-left back-btn-icon"></i></button>
          </div>
          <NoResultFound />
        </div>
      )


    for (let i = 0; i < FilterUpdatedExpenses.length; i++)
      temp += Number(FilterUpdatedExpenses[i].amount);


    return (
      <div>
        <Particle />
        <Header FromApp={SaveThemeInApp} FromAppForFilter={FilterAndSaveInApp} searchingTitleFromApp={SearchingResult} />
        <div className='backAndTheme'>
          <button onClick={backButtonHandler} className='back-btn' title='Back'><i className="fa fa-arrow-circle-left back-btn-icon"></i></button>
        </div>
        <Expenses Expenses={FilterUpdatedExpenses} FromAppToExpense={SaveInAppToExpense} ExpensesTheme={AppTheme} totalExpense={temp} />
      </div>
    );
  }
  else return (
    <div>
      <Particle />
      <Header FromApp={SaveThemeInApp} FromAppForFilter={FilterAndSaveInApp} searchingTitleFromApp='Search Expenses by name' />
      <NewExpense FromApp={SaveInApp} />
      <Expenses Expenses={AppExpenses} FromAppToExpense={SaveInAppToExpense} ExpensesTheme={AppTheme} totalExpense={totalAmount} />

    </div>
  );
};
export default App;
