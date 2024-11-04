import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUserData = createAsyncThunk('user/fetchData', async () => {
    // const response = await axios.get('/api/your-endpoint');
    // return response.data;

        console.log("Hello usererrrrrrrrrrrrrrrrrsssssss")
    return 'hello Userdfdfdsfsfsdd'
  });


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




