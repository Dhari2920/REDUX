import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
    name:"user",
    initialState:[
        {
            name:"Dhari",
            email:"Dhari@gmail.com"
        }
    ]
})
export default userSlice.reducer