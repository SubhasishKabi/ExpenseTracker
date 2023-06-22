import React, { useState } from "react";

import "./expenseFilter.css";

const ExpensesFilter = (props) => {
  // const [filteredYear, setFilteredYear] = useState("2020");

  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
    // setFilteredYear(e.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
        {/* <select value={filteredYear} onChange={dropdownChangeHandler}> */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
//the main purpose of this is to pass data to parent. i.e (state liftin)
