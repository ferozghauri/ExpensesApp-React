import React, { useState } from 'react';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

  const [yearSelected,setYearSelected] = useState('2020');

  const yearChangeHandler = (year) => {
    setYearSelected(year);
    console.log(year)
  };

  const filteredYearArray = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  });




   return(


    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onYearChange={yearChangeHandler}/>
      <ExpensesList items = {filteredYearArray}/>
    </Card>
       
   );

}

export default Expenses;