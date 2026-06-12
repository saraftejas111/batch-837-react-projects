import React, { useEffect, useState } from "react";
import {
  deleteEmployeeById,
  showAllEmployees,
} from "../employeeServices";

const ShowEmployee = ({
  empAddHua,
  updateEmp,
}) => {
  const [allemployees, setAllemployees] = useState([]);

  useEffect(() => {
    loadAllEmployees();
  }, [empAddHua]);

  const loadAllEmployees = () => {
    showAllEmployees()
      .then((res) => setAllemployees(res.data))
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    deleteEmployeeById(id).then(() => {
      loadAllEmployees();
    });
  };

  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl text-white text-center font-bold mb-6">
        All Employees
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full text-white">

          <thead>
            <tr className="bg-white/20">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Role</th>
              <th className="p-3">Salary</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {allemployees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-white/20 hover:bg-white/10 duration-300"
              >
                <td className="p-3">{emp.empid}</td>
                <td className="p-3">{emp.name}</td>
                <td className="p-3">{emp.role}</td>
                <td className="p-3">₹ {emp.salary}</td>

                <td className="p-3">

                  <button
                    onClick={() => updateEmp(emp)}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mr-2"
                  >
                    Update
                  </button>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ShowEmployee;