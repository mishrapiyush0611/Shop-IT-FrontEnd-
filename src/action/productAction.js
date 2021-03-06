import axios from "axios";
import {ALL_PRODUCTS_FAIL,ALL_PRODUCTS_SUCCESS,ALL_PRODUCTS_REQUEST,CLEAR_ERROR,PRODUCTS_DETAILS_FAIL,PRODUCTS_DETAILS_REQUEST,PRODUCTS_DETAILS_SUCCESS,
    NEW_REVIEW_FAIL
    ,NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,NEW_REVIEW_RESET,
    DELETE_PRODUCT_FAIL
    ,DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL
    ,NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    ADMIN_PRODUCTS_FAIL,ADMIN_PRODUCTS_SUCCESS,ADMIN_PRODUCTS_REQUEST
} from '../constants/productConstatnts'

export const getProducts=(keyword='')=>async(dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCTS_REQUEST
        })
       const {data}=await axios.get('http://localhost:4000/api/v1/products?keyword='+keyword)
       console.log(data)
        dispatch({
            type:ALL_PRODUCTS_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type:ALL_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}
export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:PRODUCTS_DETAILS_REQUEST
        })
       const {data}=await axios.get(`/api/v1/product/${id}`)
       console.log(data.product)
        dispatch({
            type:PRODUCTS_DETAILS_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:PRODUCTS_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
}

export const getAdminProducts=()=>async(dispatch)=>{
    try{
        dispatch({
            type:ADMIN_PRODUCTS_REQUEST
        })
       const {data}=await axios.get(`/api/v1/admin/products/`)
       console.log(data.products)
        dispatch({
            type:ADMIN_PRODUCTS_SUCCESS,
            payload:data.products
        })
    }
    catch(error){
        dispatch({
            type:ADMIN_PRODUCTS_FAIL,
            payload:error.response.data.message
        })
    }
}


export const newProduct=(productData)=>async(dispatch)=>{
    try{
        dispatch({
            type:NEW_PRODUCT_REQUEST
        })
        const config={
            headers:{
                'Content-type':"application/json"
            }
        }
       const {data}=await axios.post(`/api/v1/admin/product/new`,productData,config)
       console.log(data.product)
        dispatch({
            type:NEW_PRODUCT_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:NEW_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}
export const deleteProduct=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:DELETE_PRODUCT_REQUEST
        })
        
       const {data}=await axios.delete(`/api/v1/admin/product/${id}`)
       console.log(data.product)
        dispatch({
            type:DELETE_PRODUCT_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:DELETE_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}




export const newReview=(reviewData)=>async(dispatch)=>{
    try{
        dispatch({
            type:NEW_REVIEW_REQUEST
        })
        const config={
            headers:{
                'Content-type':"application/json"
            }
        }
       const {data}=await axios.put(`/api/v1/review`,reviewData,config)
       console.log(data.product)
        dispatch({
            type:NEW_REVIEW_SUCCESS,
            payload:data.product
        })
    }
    catch(error){
        dispatch({
            type:NEW_REVIEW_FAIL,
            payload:error.response.data.message
        })
    }
}
export const clearErrors=() => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERROR
    })
}