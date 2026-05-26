import axios from "axios";


export const showAllEmployees = () => axios.get(`http://localhost:8080/show-all`) ; 

export const  saveEmployee = (emp) => axios.post(`http://localhost:8080/add-employee` , emp) ; 

export const  updateEmployee = (id,emp) => axios.put(`http://localhost:8080/update-employee-by-id/${id}` , emp)

export const deleteEmployeeById = (id) => axios.delete(`http://localhost:8080/delete-emp-by-id/${id}`)