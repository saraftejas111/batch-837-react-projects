
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // spread opt 

  let arr1 = [1, 2, 3]
  let arr2 = [4, 5, 6]

  let arr3 = [arr1, arr2]

  console.log("arr3 = ", arr3)


  let arr4 = [...arr1, ...arr2]   // [ 1,2,3 , 4,5,6 ]

  console.log("arr4 = ", arr4)

  let person = { age: 21, name: 'raj' }

  console.log("1st = ", person)

  person = { ...person, name: 'tejas' }

  console.log("2nd = ", person)

  person = { ...person, city: 'Pune' }

  console.log("3rd = ", person)

  let employees = [
    {
      id: 101,
      name: "Tejas",
      role: "Java Developer",
      salary: 45000
    },
    {
      id: 102,
      name: "Rushikesh",
      role: "React Developer",
      salary: 40000
    },
    {
      id: 103,
      name: "Monika",
      role: "Python Developer",
      salary: 42000
    },
    {
      id: 104,
      name: "Sangini",
      role: "UI Developer",
      salary: 38000
    },
    {
      id: 105,
      name: "Akash",
      role: "Full Stack Developer",
      salary: 50000
    }
  ];

  //console.log(employees);

  for (let emps of employees) {
    console.log(emps)
  }

  let map_emp = employees.map((e) => e)

  console.log("map data = ", map_emp)

  let name = "Tejas";

  return (
    <>
      <h1>Welcome to my app..{name}</h1>

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
            employees.map((emp) => (
              <tr key={emp.id}>

                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
              </tr>
            ))
          }
        </tbody>

      </table>

    </>
  )

}
export default App
