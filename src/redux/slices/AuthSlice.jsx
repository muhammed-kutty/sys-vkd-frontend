import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { verifyTokenApi } from "../../utils/Apiservices";


let token_status
export const verifyToken= createAsyncThunk('auth/verifyToken',async(_,{rejectWithValue})=>{
    try {
        const token = localStorage.getItem('token')
        if(!token){
            console.log("no token in local storage")
            return rejectWithValue('No token found');
        }
        console.log("api called")
        // const responce = await axios.post('http://localhost:3000/api/auth/verify',{},{
        // const responce = await axios.post('https://sys-valakkuda-projectbackend.onrender.com/api/auth/verify',{},{
        //     headers:{
        //         Authorization:`Bearer ${token}`
        //     }
        // })

        const responce = await verifyTokenApi()
        console.log("verify tokn",responce.data)
        token_status = responce.data.isValied
        return responce.data
    } catch (error) {
        console.log(error)
        localStorage.removeItem("userToken");
        return rejectWithValue(error.message);
    }

})


const authSlice = createSlice({
    name:"auth",
    initialState:{
        status : 'idle',
        isAuthenticated:token_status,
        userToken:null,
        err:null
    },
    reducers:{
        login:(state , action)=>{
            console.log("login called")
            state.isAuthenticated = true,
            state.userToken = action.payload
            localStorage.setItem('token',action.payload)
        },
        logout:(state)=>{
            state.isAuthenticated =false,
            state.userToken=null
            localStorage.removeItem('token')
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(verifyToken.pending,(state)=>{
            state.status = 'loading'
        }),
        builder.addCase(verifyToken.fulfilled,(state ,action)=>{
            state.status = 'success',
            state.isAuthenticated=true,
            state.userToken=localStorage.getItem('token')
        }),
        builder.addCase(verifyToken.rejected ,(state , action)=>{
            state.status = "faild"
            state.isAuthenticated = false,
            state.userToken = null,
            state.err = action.payload
        })
    }
})

export const {login , logout} = authSlice.actions
export default authSlice.reducer