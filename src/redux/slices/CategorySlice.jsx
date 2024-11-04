import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





export const fetchCategoriData = createAsyncThunk('category/fetchData', async (userToken, { rejectWithValue }) => {
    console.log("api calle in category")
    // const response = await axios.get('http://localhost:3000/api/category',{
    const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category',{
        headers:{
            Authorization:`Bearer ${userToken}`
       }
    });


    return response.data.categories
;
 
  });


const CategoriSlice = createSlice({
    name:"category",
    initialState:{
        data:[],
        status:'idle',
        err:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchCategoriData.pending,(state)=>{
            state.status="loading"
        }),
        builder.addCase(fetchCategoriData.fulfilled,(state,action)=>{
            state.status='success',
            state.data=action.payload
        }),
        builder.addCase(fetchCategoriData.rejected, (state, action) => {
            state.status = 'failed';
            state.err = action.error.message;
          });
    }
})

export default CategoriSlice.reducer