import React, { useEffect, useState } from "react";
import { saveEmployee, updateEmployee } from "../employeeServices";

const EmployeeForm = ({ empAdded, acceptUpdate }) => {
  const [empform, setEmpform] = useState({
    empid: "",
    name: "",
    role: "",
    salary: "",
  });

  useEffect(() => {
    if (acceptUpdate) {
      setEmpform({
        empid: acceptUpdate.empid || "",
        name: acceptUpdate.name || "",
        role: acceptUpdate.role || "",
        salary: acceptUpdate.salary || "",
      });
    }
  }, [acceptUpdate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmpform({
      ...empform,
      [name]: value,
    });
  };

  const resetForm = () => {
    setEmpform({
      empid: "",
      name: "",
      role: "",
      salary: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (acceptUpdate?.id) {
      updateEmployee(acceptUpdate.id, empform)
        .then(() => {
          resetForm();
          empAdded();
        })
        .catch((err) => console.log(err));
    } else {
      saveEmployee(empform)
        .then(() => {
          resetForm();
          empAdded();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="max-w-xl mx-auto mb-10">

      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6">

        <h2 className="text-2xl font-bold text-white text-center mb-6">
          {acceptUpdate ? "Update Employee" : "Add Employee"}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="empid"
            placeholder="Employee ID"
            value={empform.empid}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={empform.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="text"
            name="role"
            placeholder="Employee Role"
            value={empform.role}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white border border-white/30"
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={empform.salary}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white border border-white/30"
          />

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-bold duration-300"
          >
            {acceptUpdate ? "Update Employee" : "Add Employee"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default EmployeeForm;