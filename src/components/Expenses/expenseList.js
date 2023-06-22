import React from 'react';

import ExpenseItem from './expenseItems';
import './expenseList.css';

//here props is an array of objects
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return (
    <ul className='expenses-list'>
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          expenses = {item}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
