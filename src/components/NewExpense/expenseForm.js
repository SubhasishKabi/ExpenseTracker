import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //USING ONE SINGLE USESTATE INSTEAD Of THREE

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  /*

  const titleChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //WHEN STATE DEPENDS UPON PREVIOUS STATES

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    console.log(e.target.value);
    setEnteredDate(e.target.value);
  };

  */
  //instead of creating handler function for each event, we can create a singler handler function

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
      //console.log(value)
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
    //console.log(expenseData)
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* <input type="text" onChange={titleChangeHandler}></input> */}
          <input
            type="text"
            value={enteredTitle}
            onChange={(e) => inputChangeHandler("title", e.target.value)}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          {/* <input type="number" onChange={amountChangeHandler}></input> */}
          <input
            type="number"
            value={enteredAmount}
            onChange={(e) => inputChangeHandler("amount", e.target.value)}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={(e) => inputChangeHandler("date", e.target.value)}
          ></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button type="submit">Add Exepense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
