import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

const Expenses = (props) => {

  const [yearSelected,setYearSelected] = useState('2020');

  const yearChangeHandler = (year) => {
    setYearSelected(year);
    console.log(year)
  };

  const filteredYearArray = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === yearSelected
  });

  let expensesContent = <p>No Expenses Found. You saved a lot of Money you are now  a billionairre</p>

  if (filteredYearArray.length >0 ){
    expensesContent = filteredYearArray.map((expense) => (
      <ExpenseItem 
        key={expense.id}
        title={expense.title} 
        amount={expense.amount}
        date={expense.date}
        />))
  }


   return(


    <Card className="expenses">
      <ExpensesFilter selected={yearSelected} onYearChange={yearChangeHandler}/>
      {expensesContent}
    </Card>
       
   );

}

export default Expenses;