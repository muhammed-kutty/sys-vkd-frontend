import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchCategories } from "../../utils/Apiservices";
import jsonData from '../../Constents/data/data.json'







export const fetchCategoriData = createAsyncThunk(
    'category/fetchDatas',
    async (userToken, { rejectWithValue }) => {
        
      try {
        // console.log("API call in category with token:", userToken);
        
    // const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category',{
    // const response = await axios.get('http://localhost:3000/api/category');

    const response = await fetchCategories()
        return response.data.categories;
  
      } catch (error) {
        console.error("Error fetching category data:", error);
        return rejectWithValue(error.response?.data || "Failed to fetch category data");
      }
    }
  );

// export const fetchCategoriData = createAsyncThunk(
//     'category/fetchDatas',
//     async (_, { rejectWithValue }) => {
        
//       try {
//         return jsonData.categories
  
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//         return rejectWithValue(error.response?.data || "Failed to fetch category data");
//       }
//     }
//   );


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