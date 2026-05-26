import React, { useEffect, useState } from 'react'
import { addProduct, updateProductAPI } from '../apiServices';

const ProductForm = ({proAdded , updateProduct}) => {

    const [product , setProduct] = useState ({proid : '', proname : '' , procatagory : '' , proprice : '', proquantity : ''})

    useEffect(()=>{

        if(updateProduct){

            setUpdateFields() ; 
        }

    }, [updateProduct])

    const setUpdateFields = () => {

        setProduct(
            {
                proid : updateProduct.proid || '', 
                proname : updateProduct.proname || '', 
                procatagory :updateProduct.procatagory || '' , 
                proprice : updateProduct.proprice || '', 
                proquantity : updateProduct.proquantity || ''
            }
        )
    }

    const handleChange = (e) => {

        let {name , value} = e.target ; 

        setProduct({...product , [name]:value})
    }

    const resetForm = () => {
        setProduct({proid : '', proname : '' , procatagory : '' , proprice : '', proquantity : ''})
    }

    const handleSubmit =(e) => {

        e.preventDefault();

      if (updateProduct && updateProduct.proid) {
        updateProductAPI(updateProduct.id , product).then((res)=>{
            console.log("update success : " , res)
             proAdded() ;
             resetForm();
        }).catch((err)=> console.log("update error : " , err)
    )
      } else {
          addProduct(product).then((res)=>{
            console.log("Pro added success ", res)
            resetForm();
            proAdded() ; 

        }).catch((err)=> {
            console.log("error : " , err)
        })
      }
    }
  return (
    <div>

        <h2>{updateProduct ? "Update Product Form" : "Add Product Form"}</h2>
      <form onSubmit={handleSubmit}>
        Product ID : <input type="text"name='proid' value={product.proid} onChange={handleChange} /> <br /><br />
        Product NAME : <input type="text"name='proname' value={product.proname} onChange={handleChange} /> <br /><br />
        Product CATEGORY : <input type="text"name='procatagory' value={product.procatagory} onChange={handleChange} /> <br /><br />
        Product PRICE : <input type="text"name='proprice' value={product.proprice} onChange={handleChange} /> <br /><br />
        Product QTY : <input type="text"name='proquantity' value={product.proquantity} onChange={handleChange} /> <br /><br />

        <button type='submit'>{updateProduct ? "Update Product" : "Add Product"}</button>
      </form>
    </div>
  )
}

export default ProductForm
