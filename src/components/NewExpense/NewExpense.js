import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  // const [showButton, setShowButton] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowForm(false);
    // setShowButton(true);
  };

  const showFormHandler = () => {
    setShowForm(true);
    // setShowButton(false);
  };

  const hideFormHandler = () => {
    setShowForm(false);
    // setShowButton(true);
  };

  return (
    <div className="new-expense">
      {!showForm && <button onClick={showFormHandler}>Add New Expenses</button>}
      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} hideForm={hideFormHandler} />}
    </div>
  );
};

export default NewExpense;
