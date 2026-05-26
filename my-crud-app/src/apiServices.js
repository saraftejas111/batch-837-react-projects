import axios from "axios";


export const showAllProducts = () => axios.get(`http://localhost:8080/products`) ; 

export const addProduct = (product) => axios.post(`http://localhost:8080/products` , product) ;

export const deleteProduct = (proid) => axios.delete(`http://localhost:8080/products/${proid}`) ;

export const updateProductAPI = (id , product) => axios.put(`http://localhost:8080/products/${id}` , product) ;