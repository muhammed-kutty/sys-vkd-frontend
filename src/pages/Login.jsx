import React, { useEffect, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/AuthSlice";
import { loginApi } from "../utils/Apiservices";
import {FaEye , FaEyeSlash} from 'react-icons/fa'

const Login = () => {
  const location = useLocation();
  const msg = location?.state?.message;
  useEffect(() => {
    if (msg) {
      setError(msg);
    }
  });
  const [formData, setFormData] = useState({
    // username: 'sysVKD@gmail.com',
    // password: 'sysvkd123'
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setshowPassword] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
    } else {
      setError("");

      try {
        // await axios.post('https://sys-valakkuda-projectbackend.onrender.com/api/auth/login',formData)
        await loginApi(formData)
          .then((data) => {
            if (data?.data?.status) {
              dispatch(login(data?.data.token));
              navigate("/");
            } else {
              setError("Something went Wrong");
            }
          }) 

          .catch((err) => {
            setError(err?.response?.data?.message);
          });
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <Form
        onSubmit={handleSubmit}
        className="p-4  bg-light shadow border rounded"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h3 className="text-center mb-4">Login</h3>

        {error && <Alert variant="danger">{error}</Alert>}

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <div style={{position:"relative"}}>

          <Form.Label>Password</Form.Label>
          <Form.Control
          
            type={!showPassword?"password":'text'}
            placeholder="Enter password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
          <p style={{position:"absolute", top:"40px", right:"30px" , background:"none", border:"none", cursor:"pointer"}} onClick={()=>setshowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye /> }</p>
            </div>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100 mt-3">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
