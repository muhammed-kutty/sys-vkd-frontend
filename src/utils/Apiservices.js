import axios from 'axios';

const API_BASE_URL = 'https://sys-valakkuda-projectbackend.onrender.com/api';
// const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});


api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); 
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
  
export const fetchUserbyCatID = (id) => api.get(`/user/${id}`);
export const getUser = ()=>api.get("/user");
export const addUser = (formdata)=>api.post("/user",formdata);
export const updateUser = (id ,formdata)=>api.put(`/user/${id}`,formdata)
export const deleteUser = (id)=>api.delete(`/user/${id}`)

export const fetchCategories = () => api.get(`/category`);
export const addCategory = (formdata)=>api.post('/category',formdata)
export const updateCategory = (id ,formdata)=>api.put(`/category/${id}`,formdata)
export const deleteCategory = (id)=>api.delete(`/category/${id}`)

export const loginApi = (formData)=>api.post('/auth/login',formData)
export const verifyTokenApi = ()=>api.get('/auth/verify')

