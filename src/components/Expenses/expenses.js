import ExpenseItem from "./expenseItems";
import ExpensesFilter from "./expenseFilter";
import ExpenseList from "./expenseList";
import ExpensesChart from "./expensesChart";
import "./expenses.css";
import Card from "../UI/card";
import React, { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  /*
  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if( filterInfoText === '2022') {
    filterInfoText = "2019, 2020 & 2021";
  }
*/
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

const filteredExpenses = props.expenses.filter(expense => {
  return expense.date.getFullYear().toString() === filteredYear
})
//returns an array

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        {/* <p>Data for {filterInfoText} is hidden </p> */}

        {/* {props.expenses.map((item) => (
          <ExpenseItem key={item.id} expenses={item}></ExpenseItem>
        ))} */}
        <ExpensesChart expenses = {filteredExpenses}></ExpensesChart>
        <ExpenseList items = {filteredExpenses}></ExpenseList>

      </Card>
    </div>
  );
}

export default Expenses;
//in expense filter onChangeFilter is used to retrieve data(state lifting) and the other on eis to pass data
//we could have  uses useState in the expensefilter.js but we have done here because to understand the concept of Derived States
