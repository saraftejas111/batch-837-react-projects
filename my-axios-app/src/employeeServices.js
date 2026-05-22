import axios from "axios"

// export const showAllEmployees = () => {
//     return axios.get(`http://localhost:8080/employees`) ; 
// }

export const showAllEmployees = () =>  axios.get(`http://localhost:8080/employees`) ; 

export const deleteEmployeeById = (id) => axios.delete(`http://localhost:8080/employees/${id}`) ; 

export const saveEmployee = (employee) => axios.post(`http://localhost:8080/employees` , employee) ; 

export const updateEmployee = (id , employee) => axios.put(`http://localhost:8080/employees/${id}` , employee) ; 