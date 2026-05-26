import React, { useEffect, useState } from 'react'
import { saveEmployee, updateEmployee } from '../apiServices';

const EmployeeForm = ({ empAdded, acceptUpdate }) => {

    let [empform, setEmpform] = useState({
      
        name: '',
        department: '',
        email: '',
        salary: ''
    })

    useEffect(() => {

        if (acceptUpdate) {
            handleUpdate();
        }

    }, [acceptUpdate])

    const handleUpdate = () => {

        setEmpform({
           
            name: acceptUpdate.name || '',
            department: acceptUpdate.department || '',
            email: acceptUpdate.email || '',
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
          
            name: '',
            department: '',
            email: '',
            salary: ''
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (acceptUpdate && acceptUpdate.id)  {

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

                Enter NAME :
                <input
                    type="text"
                    name='name'
                    value={empform.name}
                    onChange={handleChange}
                    required
                />
                <br /><br />

                Enter department :
                <input
                    type="text"
                    name='department'
                    value={empform.department}
                    onChange={handleChange}
                    required
                />
                <br /><br />
                Enter Email :
                <input
                    type="text"
                    name='email'
                    value={empform.email}
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