
import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {//props to send to App.js

    const [isEditing,setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {//function to recieve form Data
        const expenseData = {//Expense Data Object
            id: Math.random().toString(),
            ...enteredExpenseData
        };
        props.onAddExpense(expenseData);//Sending it to App.js
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }



    return(
        <div className="new-expense">
        {
            !isEditing && (
                <button onClick={startEditingHandler}>Add Expense</button>
            )
        }
        {
            isEditing && (
                <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />
            )
        }
        
        </div>
    );
};

export default NewExpense;