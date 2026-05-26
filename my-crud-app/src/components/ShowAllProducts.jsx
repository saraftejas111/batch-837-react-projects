import React, { useEffect, useState } from 'react'
import { deleteProduct, showAllProducts } from '../apiServices'

const ShowAllProducts = ({recieveAdded , sendUpdate}) => {

    const [allproducts , setAllproducts] = useState([])


    useEffect(()=> {
        loadAllProducts();
    },[recieveAdded])

    const loadAllProducts = () => {
        showAllProducts().then((res)=>{
            setAllproducts(res.data)
        })
    }

    const handleDelete = (pid) =>{

        deleteProduct(pid).then((res)=>{
            console.log("delete success " , res) ; 
            loadAllProducts();
        }).catch((err)=>console.log("Error Delete : " , err))
    }

    const handleUpdate = (pro) => {
        console.log("update : " , pro)

        sendUpdate(pro); 
    }
  return (
    <div>

        <h2>All Products </h2>
      <table border='1'>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product NAME</th>
                <th>Product CATEGORY</th>
                <th>Product PRICE</th>
                <th>Product QUANTITY</th>
                <th>ACTIONS</th>
            </tr>
        </thead>

        <tbody>
            {
                allproducts.map((p) => (
                    <tr key={p.id}>
                        <td>{p.proid}</td>
                        <td>{p.proname}</td>
                        <td>{p.procatagory}</td>
                        <td>{p.proprice}</td>
                        <td>{p.proquantity}</td>
                        <td>
                            <button onClick={()=>handleDelete(p.id)}>Delete</button> {" "}
                            <button onClick={()=>handleUpdate(p)}>Update</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default ShowAllProducts


