import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ModalForm from "../Constents/ModalForm";
import ComanTable from "../Constents/ComanTable";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../Constents/Loader";
import {
  addUser,
  deleteUser,
  fetchUserbyCatID,
  updateUser,
} from "../utils/Apiservices";
import { Button, Col, Form, Row } from "react-bootstrap";
import jsonData from "../Constents/data/data.json";

const UserDetails = () => {
  const { id } = useParams();
  const userDetails = useSelector((state) => state.user.data);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const [issubmiting, setissubmiting] = useState(false);
  const [FormShown, setFormShown] = useState(false);
  const [data, setdata] = useState([]);
  const [typeofForm, settypeofForm] = useState("add");
  const [loading, setloading] = useState(false);
  const [category, setcategory] = useState({});
  const [filterdData, setfilterdData] = useState([]);

  const [searchKeyword, setsearchKeyword] = useState("");

  const [formData, setformData] = useState({});

  // const fettch_data = async () => {
  //     setloading(true)
  //   try {
  //   const res = await fetchUserbyCatID(id);
  //   console.log("responce====", res);
  //       setdata(res.data.data);
  //   } catch (error) {
  //       console.log(
  //           "Categoruy form submiting error",
  //           error?.response?.data?.message
  //         );
  //         toast.error(error?.response?.data?.message || error.message, {
  //           autoClose: 3000,
  //         });
  //       } finally {
  //        setloading(false)
  //         // dispatch(fetchUserbyCatID(id))
  //       }

  // };

  const fettch_data = async () => {
    setloading(true);
    try {
      const data = jsonData?.users?.filter((item) => item.category_id == id);
      setdata(data);
      const item = jsonData?.categories?.find((item) => item.id == id);
      console.log("jadkbvvvvvvvvvvvvvvv", item);
      setcategory(item);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message, {
        autoClose: 3000,
      });
    } finally {
      setloading(false);
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
      const responce = await deleteUser(id);
      // const responce = await axios.delete(`https://sys-valakkuda-projectbackend.onrender.com/api/category/${id}`,{
      //     headers:{
      //          Authorization:`Bearer ${userToken}`
      //     }
      // })
      const { status, message } = responce.data;
      if (status === true) {
        toast.error(message, { autoClose: 3000 });
      }
    } catch (error) {
      console.log("CAtegoruy form submiting error", error);
      toast.error(error?.response?.data?.message || error.message, {
        autoClose: 3000,
      });
    } finally {
      // setFormData( formData.name='')
      fettch_data();
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

  const handlesearch = (e) => {
    const { value } = e.target;
    console.log("changeeeeeeeeee", value);
    setsearchKeyword(value);
  };

  const searchData = () => {
    const keyword = (
      typeof searchKeyword === "string" ? searchKeyword : ""
    ).toLowerCase();
    if (!keyword) {
      setfilterdData(data); // full data list
      return;
    }

    const results = data.filter(
      (item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase()) ||
        item.eng_name.toLowerCase().includes(keyword.toLowerCase())
    );
    setfilterdData(results);
  };

  const search_handlesubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  useEffect(() => {
    console.log("search useeffect");
    searchData();
  }, [data, searchKeyword]);

  return (
    <div className="spclcontainer">
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
      <div className="row custm_animTop d-flex justify-content-center ">
        <div className="col-12 text-center  text-bg-light w-50 p-2 rounded fw-bolder mt-5 mb-3">
          <h1 className="">{category.name}</h1>
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

      {/* <div className="row custm_anim ms-1 d-flex justify-content-around align-items-center">
  <div>

<Link  to='/' className=" text-center bg-primary p-3 rounded mb-4 text-light fw-bold" style={{width:"85px"}} >Home</Link
>
  </div>
  <div>

  <Form style={{width:""}} className="w-25 d-flex ms-3">

<Col xs="auto" className="">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              />
          </Col>
          <Col xs="auto" className="ms-2">
            <Button type="submit">Submit</Button>
          </Col>
              </Form>
              </div>

</div> */}
      <div className="row  ms-1 d-flex justify-content-between w-100">
        <div className="d-flex custm_anim" style={{ width: "40%" }}>
          <Col xs={6} md={4} className="d-flex justify-content-start">
            <Link
              to="/"
              className="text-center bg-primary p-3 rounded text-light fw-bold"
            >
              Home
            </Link>
          </Col>
        </div>
        <div className="d-flex custm_animright justify-content-end " style={{ width: "55%" }}>
          <Col
            xs={12}
            md={6}
            className="d-flex justify-content-md-end justify-content-center mt-3 mt-md-0"
          >
            <Form className="d-flex w-100" onSubmit={search_handlesubmit}>
              <Form.Control
                type="text"
                value={searchKeyword}
                placeholder="Search"
                onChange={handlesearch}
                className="me-2 w-100"
              />
              <Button type="submit" variant="secondary">
                Search
              </Button>
            </Form>
          </Col>
        </div>
      </div>

      {data.length !== 0 ? (
        <div className="custm_animBtm">
          <ComanTable
            columns={columns}
            data={filterdData.length !== 0 ? filterdData : data}
            onCall={handleCall}
            onDelete={handleDelete}
            onEdit={handleEdit}
            name="user"
            isAuth={isAuth}
          />
        </div>
      ) : (
        !loading && (
          <Row>
            <Col className="text-center custm_anim">
              <span className="text-bg-danger fs-4 p-2 rounded fw-bolder">
                <strong>No Users In this category </strong>
              </span>
            </Col>
          </Row>
        )
      )}

      {loading && <Loader />}
    </div>
  );
};

export default UserDetails;
