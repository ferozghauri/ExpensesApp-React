
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  // const [yearSelected,setYearSelected] = useState('');

  const onyearChange = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Select Year</label>
        <select value={props.selected} onChange={onyearChange}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;