import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





// export const fetchCategoriData = createAsyncThunk('category/fetchData', async (userToken, { rejectWithValue }) => {
//     console.log("api calle in category",userToken)
//     // const response = await axios.get('http://localhost:3000/api/category',{
//     const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category',{
//         headers:{
//             Authorization:`Bearer ${userToken}`
//        }
//     });


//     return response.data.categories
// ;
 
//   });


export const fetchCategoriData = createAsyncThunk(
    'category/fetchData',
    async (userToken, { rejectWithValue }) => {
        
      try {
        console.log("API call in category with token:", userToken);
        
    const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category',{

        // const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category', {
          headers: {
            Authorization: `Bearer ${userToken}`
            // Authorization: `Bearer HElloToken`
          }
        });
  
        // Assuming the API returns a response with a `data` object containing `categories`
        return response.data.categories;
  
      } catch (error) {
        // Log the error for debugging
        console.error("Error fetching category data:", error);
  
        // Return a custom error message using rejectWithValue
        return rejectWithValue(error.response?.data || "Failed to fetch category data");
      }
    }
  );

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