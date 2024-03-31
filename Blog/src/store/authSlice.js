import {createSlice}  from '@reduxjs/toolkit'
const initialState={
    userdata:null,
    status:false,
}
const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
       login:(state,action)=>{
        state.userdata = action.payload.userdata;
        state.status = true;
       },
       logout:(state,action)=>{
        state.userdata = null;
        state.status = false;
       }
    }
})
export default authSlice.reducer;
export const {login,logout}=authSlice.actions