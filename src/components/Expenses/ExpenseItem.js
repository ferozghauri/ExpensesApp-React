import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // const month = props.date.toLocaleString('en-US',{month: 'long'})
    // const day = props.date.toLocaleString('en-US',{day: '2-digit'});
    // const year = props.date.getFullYear();

    // const [title, setTitle] = useState(props.title);



    // const clickHander = () => {setTitle('Updated!')};

    return (
        <li>
            <Card className="expense-item">
            <ExpenseDate date={props.date}/>
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;