import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.72,
      date: new Date(2021, 7, 14),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 694.12,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "New Desk(wooden)",
      amount: 750,
      date: new Date(2021, 5, 12),
    },
    { id: "e4", title: "Wall Colour", amount: 45, date: new Date(2021, 12, 4) },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, {expenses: expenses})
  // );
  return (
    <div>
      <NewExpense />
      <Expenses expenses= {expenses} />

    </div>
  );
}

export default App;
