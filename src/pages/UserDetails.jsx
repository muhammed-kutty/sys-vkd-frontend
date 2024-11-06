import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalForm from "../Constents/ModalForm";
import ComanTable from "../Constents/ComanTable";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from '../Constents/Loader'
import { addUser, deleteUser, fetchUserbyCatID, updateUser } from "../utils/Apiservices";
import { Col, Row } from "react-bootstrap";

const UserDetails = () => {
  const { id } = useParams();
  const userDetails = useSelector((state) => state.user.data);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [issubmiting, setissubmiting] = useState(false);
  const [FormShown, setFormShown] = useState(false);
  const [data, setdata] = useState([]);
  const [typeofForm, settypeofForm] = useState("add");
  const [loading, setloading] = useState(false)

  const [formData, setformData] = useState({});

  const fettch_data = async () => {
      setloading(true)
    try {
    const res = await fetchUserbyCatID(id);
    console.log("responce====", res);
        setdata(res.data.data);
    } catch (error) {
        console.log(
            "Categoruy form submiting error",
            error?.response?.data?.message
          );
          toast.error(error?.response?.data?.message || error.message, {
            autoClose: 3000,
          });
        } finally {
         setloading(false)
          // dispatch(fetchUserbyCatID(id))
        }
    
  };

  useEffect(() => {
    fettch_data();
  }, []);

  const columns = [
    { header: "ID", field: "id" },
    { header: "Name", field: "name" },
    { header: "Phone Number", field: "phone" },
    { header: "Action", field: "action" },
  ];

  const Form_Fields = [
    { label: "Name", type: "text", placeholder: " Name", name: "name" },
    {
      label: "Mobile Number",
      type: "tel",
      placeholder: " Mobile number",
      name: "phone_number",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setissubmiting(true);
    if (!formData.name) {
      return toast.error("Name is Requird", { autoClose: 3000 });
    }
    if (!formData.phone_number) {
      return toast.error("Mobile Number is Requird", { autoClose: 3000 });
    }

    try {
      let responce;
      if (typeofForm === "add") {
        // responce = await axios.post('http://localhost:3000/api/category',formData,{
        responce = await addUser(formData);
        // responce = await axios.post('https://sys-valakkuda-projectbackend.onrender.com/api/category',formData,{
        //     headers:{
        //         Authorization:`Bearer ${userToken}`
        //     }
        // })
      } else {
        // responce = await axios.put(`http://localhost:3000/api/category/${formData.id}`,formData,{
        // responce = await axios.put(`https://sys-valakkuda-projectbackend.onrender.com/api/category/${formData.id}`,formData,{
        //     headers:{
        //         Authorization:`Bearer ${userToken}`
        //     }
        // })
        responce = await updateUser(formData.userId, formData);
      }
      const { status, message } = responce.data;
      if (status === true) {
        setFormShown(false);
        toast.success(message, { autoClose: 3000 });
        setformData("");
      }
    } catch (error) {
      console.log(
        "Categoruy form submiting error",
        error?.response?.data?.message
      );
      toast.error(error?.response?.data?.message || error.message, {
        autoClose: 3000,
      });
    } finally {
      setissubmiting(false);
      fettch_data();
      // dispatch(fetchUserbyCatID(id))
    }
  };

  // Function to handle delete action
  const handleDelete = async (id) => {
    console.log(`Delete user with ID: ${id}`);

    try {
        const responce = await deleteUser(id)
        // const responce = await axios.delete(`https://sys-valakkuda-projectbackend.onrender.com/api/category/${id}`,{
        //     headers:{
        //          Authorization:`Bearer ${userToken}`
        //     }
        // })
        const {status , message} = responce.data
        if(status === true){
            toast.error(message, {autoClose:3000})

        }
    } catch (error) {
        console.log("CAtegoruy form submiting error",error)
        toast.error(error?.response?.data?.message || error.message, {autoClose:3000})
    }
    finally{
        // setFormData( formData.name='')
fettch_data()
    }
    // Implement delete logic here
  };

  // Function to handle edit action
  const handleEdit = (id) => {
    console.log(`Edit user with ID: ${id}`);
    settypeofForm("edit");
    const user = data?.find((item) => item.categorieID === id);
    console.log(user);
    setformData({
        userId: user.userID,
        name: user.name,
        phone_number: user.phone_number,
        categorie_ID: id,
    });
    setFormShown(true);
  };

console.log("formdataaaaaaaaaaaaaaaaaaaaaaaa",formData)
  const handleCall = (phoneNumber) => {
    // Redirect to dialer on mobile devices
    if (isMobile()) {
      window.location.href = `tel:${phoneNumber}`;
    } else {
      alert("Calling feature is only available on mobile devices.");
    }
  };

  // Function to check if the user is on a mobile device
  const isMobile = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  const handleCloseForm = () => {
    console.log("adivnnnnnnnnnnnnnnnnnnnnnnn");
    setFormShown(false);
    setformData("");
  };

  return (
    <>
    
      {FormShown && (
        <ModalForm
          isSubmting={issubmiting}
          handleClose={handleCloseForm}
          name="User"
          mode={typeofForm}
          formData={formData}
          setFormdata={setformData}
          handlechange={handleChange}
          handlesubmit={handleSubmit}
          formFiels={Form_Fields}
          setFormShown={setFormShown}
          FormShown={FormShown}
        />
      )}
      <div className="row">
        <div className="col-12 text-center mt-5 mb-3">
          <h1>User Details</h1>
        </div>
      </div>
      {isAuth && (
        <div className="row">
          <div className="col-12 d-flex justify-content-end mb-3">
            <Link
              onClick={() => {
                setFormShown(true);
                setformData((prevData) => ({
                  ...prevData,
                  categorie_ID: id,
                }));
                settypeofForm("add");
              }}
              className="bg-primary text-light p-2 rounded"
            >
              Add User
            </Link>
          </div>
        </div>
      )}

{
data.length !== 0 ?
<ComanTable
        columns={columns}
        data={data}
        onCall={handleCall}
        onDelete={handleDelete}
        onEdit={handleEdit}
        name="user"
        isAuth={isAuth}
        />
        :
        !loading && 
        <Row >
            <Col className="text-center">
            <span className="text-bg-danger fs-4 p-2 rounded fw-bolder"><strong>No Users In this category </strong></span>
            </Col>
        </Row>
    }

    {
        loading && <Loader/>
    }
    </>
  );
};

export default UserDetails;
