import React, { useState } from 'react'
import { deleteEmployeeById, showAllEmployees } from '../employeeServices'
import { useEffect } from 'react'

const ShowEmployee = ({ empAddHua, updateEmp }) => {

    let [allemployees, setAllemployees] = useState([])

    useEffect(() => {
        loadAllEmployees();
    })

    const loadAllEmployees = () => {

        showAllEmployees().then((res) => setAllemployees(res.data))

    }

    const handleDelete = (empid) => {

        console.log(empid)
        deleteEmployeeById(empid).then((res) => {
            loadAllEmployees();
        })
    }

    const handleUpdate = (emp) => {

        updateEmp(emp);

    }

    return (
        <div>


            <h1>All Employees</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allemployees.map((emp) => (
                            <tr key={emp.empid}>
                                <td>{emp.empid}</td>
                                <td>{emp.name}</td>
                                <td>{emp.role}</td>
                                <td>{emp.salary}</td>
                                <td>
                                    <button onClick={() => handleDelete(emp.id)}>Delete</button> {" "}
                                    <button onClick={() => handleUpdate(emp)}>Update</button>
                                </td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowEmployee
