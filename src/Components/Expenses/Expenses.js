import "./Expenses.css";
import React from 'react';
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import '../NewExpense/DeveloperDetails.css';

const Expenses=(props)=> {
  return (
    
      
      <Card className="expenses">
      {
        props.Expenses.map(
          expense=>(<ExpenseItem ExpenseItem={expense}/>)
        )
        
      } <a href="https://www.linkedin.com/in/akash-gupta-9a2461228"><h3 className="developerdetails">Develope by- Akash Gupta</h3></a>
    </Card>
    
   
  );
}
export default Expenses;
