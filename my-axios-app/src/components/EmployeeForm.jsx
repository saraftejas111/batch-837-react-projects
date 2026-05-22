import React, { useEffect, useState } from 'react'
import { saveEmployee, updateEmployee } from '../employeeServices';

const EmployeeForm = ({ empAdded, acceptUpdate }) => {

    let [empform, setEmpform] = useState({
        empid: '',
        name: '',
        role: '',
        salary: ''
    })

    useEffect(() => {

        if (acceptUpdate) {
            handleUpdate();
        }

    }, [acceptUpdate])

    const handleUpdate = () => {

        setEmpform({
            empid: acceptUpdate.empid || '',
            name: acceptUpdate.name || '',
            role: acceptUpdate.role || '',
            salary: acceptUpdate.salary || ''
        })

    }

    const handleChange = (e) => {

        let { name, value } = e.target;

        setEmpform({
            ...empform,
            [name]: value
        });

    }

    const resetForm = () => {
        setEmpform({
            empid: '',
            name: '',
            role: '',
            salary: ''
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (acceptUpdate && acceptUpdate.empid)  {

            updateEmployee(acceptUpdate.id, empform).then((res) => {
                console.log("update success,,,", res)
                resetForm();
                empAdded();
            }).catch((err) => console.log("error in update ", err))

        } else {
            
            saveEmployee(empform)
                .then((res) => {

                    resetForm();

                    empAdded();

                })
                .catch((err) => console.log("add error ", err))
        }

    }

    return (
        <div>

            <h2>{acceptUpdate ? "Update Employee Form" : "Add Employee Form "}</h2>

            <form onSubmit={handleSubmit}>

                Enter ID :
                <input
                    type="text"
                    name='empid'
                    value={empform.empid}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                Enter NAME :
                <input
                    type="text"
                    name='name'
                    value={empform.name}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                Enter ROLE :
                <input
                    type="text"
                    name='role'
                    value={empform.role}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                Enter SALARY :
                <input
                    type="text"
                    name='salary'
                    value={empform.salary}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                <button type='submit'>{acceptUpdate ? "Update Employee" : "Add Employee"}</button>

            </form>

        </div>
    )
}

export default EmployeeForm