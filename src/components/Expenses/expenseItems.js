import React, { useState } from "react";

import "./expenseItems.css";
import ExpenseDate from "./expenseDate";
import Card from "../UI/card";

function ExpenseItem(props) {
  //see below for explanation
  const [title, setTitle] = useState(props.expenses.title);
  //first iteam returns the current state
  //second value is an function that updates the state

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.expenses.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.expenses.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;

//  METHOD 1

/*
return (
  <div className="expense-item">
    <div>{props.date.toISOString()}</div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </div>
);
*/

//in this method we can destructure the props

//EXPLANANTION of STATE

/*
let title = props.expesnses.title
const clickHandler = () => {
  title = 'Updated'
}

This method wont work. Because React doesn't care if the values of variable are changed.
The component(which is basically a function) is not executed again.
It has to be executed again for the changes to take place. This is where useState helps. It tells React to execute 
the componenet once and then keep track on any change in state variables.

useState returns an array with two elements. The first element is the inital state and the second is an function which 
can be called when the event happens

*/
