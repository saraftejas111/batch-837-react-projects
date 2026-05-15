import { useState } from 'react'
import './App.css'

function App() {

  let [emp, setEmp] = useState({ id: '', name: '', role: '', salary: '' })

  let [allemployees , setAllemployees] = useState([])

  const handleChange = (e) => {

    let { name, value } = e.target;

    setEmp({ ...emp, [name]: value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('employee added success.. ' , emp)

    setAllemployees([...allemployees, emp])

    setEmp({ id: '', name: '', role: '', salary: '' })

  }
  return (
    <>
      <center>
        <h1>Welcome to My Emp App..</h1>

        <form onSubmit={handleSubmit}>

          Enter ID : <input type="text" name='id' value={emp.id} onChange={handleChange} /> <br /><br />
          Enter NAME : <input type="text" name='name' value={emp.name} onChange={handleChange} /> <br /><br />
          Enter ROLE : <input type="text" name='role' value={emp.role} onChange={handleChange} /> <br /><br />
          Enter SALARY : <input type="text" name='salary' value={emp.salary} onChange={handleChange} /> <br /><br />

          <button type='submit'>Add Employee</button>
        </form>
<br /><br />

        <table border='1'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>ROLE</th>
                      <th>SALARY</th>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      allemployees.map((e)=>(
                        <tr key={e.id}>
                              <td>{e.id}</td>
                              <td>{e.name}</td>
                              <td>{e.role}</td>
                              <td>{e.salary}</td>
                        </tr>
                      ))
                    }
                  </tbody>
        </table>
              
      </center>
    </>
  )
}

export default App
