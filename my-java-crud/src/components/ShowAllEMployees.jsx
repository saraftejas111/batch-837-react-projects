import React, { useEffect, useState } from 'react'
import { deleteEmployeeById, showAllEmployees } from '../apiServices';

const ShowAllEMployees = ({added , sendUpdate}) => {
   let [allemployees, setAllemployees] = useState([])

    useEffect(() => {
        loadAllEmployees();
    },[added])

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

        sendUpdate(emp);

    }

    return (
        <div>


            <h1>All Employees</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DEPT</th>
                        <th>EMAIL</th>
                        <th>SALARY</th>
                        <th>ACTIONS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allemployees.map((emp) => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.department}</td>
                                <td>{emp.email}</td>
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

export default ShowAllEMployees
