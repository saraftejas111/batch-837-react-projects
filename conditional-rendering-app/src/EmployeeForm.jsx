import React, { useState } from 'react'

const EmployeeForm = ({isAdd}) => {

    let [employee , setEmployee] = useState({id : "" , name : "" , role : "" , salary : ""})
  return (
    <div>

<h1>{isAdd > 1 ? "Add Employee Form" : "Update Employee Form"}</h1>
      
      <form>

        Id <input type="text" /> <br /><br />
        Name <input type="text" /> <br /><br />
        Role<input type="text" /> <br /><br />
        Salary <input type="text" /> <br /><br />
                  
                  <button>{isAdd > 1 ? "Add Employee" : "Update Employee"}</button>
      </form>
    </div>
  )
}

export default EmployeeForm
