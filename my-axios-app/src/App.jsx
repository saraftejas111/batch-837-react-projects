import React, { useState } from "react";
import "./App.css";
import ShowEmployee from "./components/ShowEmployee";
import EmployeeForm from "./components/EmployeeForm";

const App = () => {
  const [add, setAdd] = useState(0);
  const [emp, setEmp] = useState(null);

  const handleAdd = () => {
    setAdd((prev) => prev + 1);
  };

  const handleUpdate = (upEmp) => {
    setEmp(upEmp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700 p-4 md:p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-center text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">
          Employee Management System
        </h1>

        <div className="text-center mb-8">
          <button
            onClick={() => setEmp(null)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-105 duration-300"
          >
            Add New Employee
          </button>
        </div>

        <EmployeeForm
          empAdded={handleAdd}
          acceptUpdate={emp}
        />

        <ShowEmployee
          empAddHua={add}
          updateEmp={handleUpdate}
        />

      </div>

    </div>
  );
};

export default App;