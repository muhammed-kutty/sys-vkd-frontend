import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import jsonData from '../../Constents/data/data.json'
import { fetchUserbyCatID } from '../../utils/Apiservices';

export const fetchUserData = createAsyncThunk('user/fetchData', async (id,userToken, { rejectWithValue }) => {
    try {
        console.log("API call in USERS with token:", userToken);
        
    // const response = await axios.get('https://sys-valakkuda-projectbackend.onrender.com/api/category',{
    // const response = await axios.get('http://localhost:3000/api/category');

    const response = await fetchUserbyCatID()
        return response.data.categories;
  
      } catch (error) {
        console.error("Error fetching category data:", error);
        return rejectWithValue(error.response?.data || "Failed to fetch category data");
      }
  });
// export const fetchUserData = createAsyncThunk('user/fetchData', async () => {
//     try {
//         return jsonData.categories
  
//       } catch (error) {
//         console.error("Error fetching category data:", error);
//         return rejectWithValue(error.response?.data || "Failed to fetch category data");
//       }
//   });


const userSlice = createSlice({
    name:"user",
    initialState:{
        data:[],
        status:'idle',
        err:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchUserData.pending,(state)=>{
            state.status="loading"
        })
        .addCase(fetchUserData.fulfilled,(state,action)=>{
            state.status='success',
            state.data=action.payload
        })
        .addCase(fetchUserData.rejected, (state, action) => {
            state.status = 'failed';
            state.err = action.error.message;
          });
    }
})
export default userSlice.reducer 




