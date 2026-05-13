import React, { use, useState } from 'react'

const EmployeeForm = () => {

    // onchange advance version , spread operator , onsubmit 

    // let [id , setId] = useState(0)
    // let [empname , setEmpname] = useState("")
    // let [role , setRole] = useState("")
    // let [salary , setSalary] = useState("")

    let [empform, setEmpform] = useState({ id: "", empname: "", role: "", salary: "" })

    // const handleId = (e) => {
    //     //console.log(e.target.value)
    //     setEmpform({ ...empform, id: e.target.value })
    // }
    // const handleEmpname = (e) => {
    //     //console.log(e.target.value)
    //     setEmpform({ ...empform, empname: e.target.value })
    // }
    // const handleRole = (e) => {
    //     //console.log(e.target.value)
    //     setEmpform({ ...empform, role: e.target.value })
    // }
    // const handleSalary = (e) => {
    //     //console.log(e.target.value)
    //     setEmpform({ ...empform, salary: e.target.value })
    // }


    const handleChange = (e) => {

        let { name, value } = e.target;  // name = empname , value = raj

        setEmpform({ ...empform, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();   // prevents from page refresh..
        console.log("form submitted..")
        console.log('Employee Data Added : ', empform)

        setEmpform({ id: "", empname: "", role: "", salary: "" })   // clear the fields after form submits
    }

    return (
        <div>

            <h2>Employee Form</h2>

            <form onSubmit={handleSubmit}>

                enter id : <input type="text" name='id' value={empform.id} onChange={handleChange} /><br /><br />
                enter name : <input type="text" name='empname' value={empform.empname} onChange={handleChange} /><br /><br />
                enter role : <input type="text" name='role' value={empform.role} onChange={handleChange} /><br /><br />
                enter salary : <input type="text" name='salary' value={empform.salary} onChange={handleChange} /><br /><br />

                <button type='submit'>Add Employee</button>

            </form>

        </div>
    )
}

export default EmployeeForm
