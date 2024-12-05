import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from '../components/ModalForm';
import ComanTable from '../components/ComanTable';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";

import axios from 'axios';
import { fetchCategoriData } from '../redux/slices/CategorySlice';
import { addCategory, deleteCategory, updateCategory } from '../utils/Apiservices';
import ConfirmPopup from '../components/ConfirmPopup';

const CategorieDetails = () => {
    const categoryDetails =  useSelector(state => state.category.data)
    const {userToken , isAuthenticated} = useSelector(state => state.auth)
    const [FormShown, setFormShown] = useState(false);
    const [isSubmting, setisSubmting] = useState(false)
    const [typofForm, settypofForm] = useState("add")
  const [deleteCofirmation, setdeleteCofirmation] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
      });

    const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(fetchCategoriData(userToken))
      },[dispatch])

      console.log("categorydetailspage;dssssssssss",userToken)

      const handleChange =  (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const handleSubmit = async (e) => {
        // toast.success("messaagedffffffffffffffffff", {autoClose:3000})

        e.preventDefault();
        if(!formData.name){
           return  toast.error("Name is Requird", {autoClose:3000})

        }
        setisSubmting(true)

        try {
            let responce
            if(typofForm === 'add'){

                // responce = await axios.post('http://localhost:3000/api/category',formData,{
                responce = await addCategory(formData)
                // responce = await axios.post('https://sys-valakkuda-projectbackend.onrender.com/api/category',formData,{
                //     headers:{
                //         Authorization:`Bearer ${userToken}`
                //     }
                // })
            }else{
                // responce = await axios.put(`http://localhost:3000/api/category/${formData.id}`,formData,{
                // responce = await axios.put(`https://sys-valakkuda-projectbackend.onrender.com/api/category/${formData.id}`,formData,{
                //     headers:{
                //         Authorization:`Bearer ${userToken}`
                //     }
                // })
                responce = await updateCategory(formData.id , formData)
            }
            const {status , message} = responce.data
            if(status === true){
                setFormShown(false)
                toast.success(message, {autoClose:3000})
            setFormData( {name:''})

            }
        } catch (error) {
            console.log("Categoruy form submiting error",error?.response?.data?.message)
            toast.error(error?.response?.data?.message || error.message, {autoClose:3000})
        }
        finally{
            setisSubmting(false)
            dispatch(fetchCategoriData(userToken))
        }
        console.log('Form data submitted:', formData);
      };
      
    
    const columns = [
        { header: 'No', field: 'No' },
        { header: 'CategoryName', field: 'CategoryName' },
        { header: 'Action', field: 'action' }
    ];

    const Form_Fields = [
        {label:"Name",type:'text',placeholder:"Enter Category Name",name:"name",}
    ]

    // Function to handle delete action
    const handleDelete =async (id) => {
        setisSubmting(true)
        console.log("called,", id)
        try {
            const responce = await deleteCategory(id)
            // const responce = await axios.delete(`https://sys-valakkuda-projectbackend.onrender.com/api/category/${id}`,{
            //     headers:{
            //          Authorization:`Bearer ${userToken}`
            //     }
            // })
            const {status , message} = responce.data
            if(status === true){
                toast.error(message, {autoClose:3000})

            }
      setdeleteCofirmation(false)

        } catch (error) {
            console.log("CAtegoruy form submiting error",error)
            toast.error(error?.response?.data?.message || error.message, {autoClose:3000})

        }
        finally{
            // setFormData( formData.name='')
            dispatch(fetchCategoriData(userToken))
            setisSubmting(false)

        }
    };

    // Function to handle edit action
    const handleEdit = (id) => {
        console.log(`Edit user with ID: ${id}`);
        settypofForm("edit")
        const category = categoryDetails?.find((item)=>item.categorieID === id)
        console.log(category.name)
        setFormData({name:category.name , id:category.categorieID})
        setFormShown(true); // Show modal for editing
    };

    
    const handleCloseForm =()=>{
        console.log("adivnnnnnnnnnnnnnnnnnnnnnnn")
        setFormShown(false)
        setFormData('')
    }

    return (
        <div className='spclcontainer'>
            {FormShown && <ModalForm handleClose={handleCloseForm} name='Category' mode={typofForm} isSubmting={isSubmting} formData={formData} setFormShown={setFormShown} handlechange={handleChange} handlesubmit={handleSubmit} FormShown={FormShown} formFiels={Form_Fields} />}
            <div className="row">
                <div className="col-12 text-center mt-5 mb-3">
                    <h1>Category Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <Link onClick={() =>{
                        setFormData({name:""})
                        setFormShown(true)
                        settypofForm('add')
                        }
                         } className='bg-primary text-light p-2 rounded'>
                        Add Category
                    </Link>
                </div>
            </div>
   
            <ComanTable 
            name={'category'}
                columns={columns}
                data={categoryDetails}
                onDelete={handleDelete}
                onEdit={handleEdit}
                loading={isSubmting}
                isAuth={isAuthenticated}
            deletConfirmation={deleteCofirmation}
            setDeleteConfirmation={setdeleteCofirmation}


            />

{/* {
        deleteCofirmation && 
        <ConfirmPopup show={deleteCofirmation} setShow={setdeleteCofirmation} onConfirm={handleDelete} />
      } */}

            {/* <ToastContainer /> */}
        </div>
    );
};

export default CategorieDetails;
