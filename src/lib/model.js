import mongoose from "mongoose";
import { Schema} from "mongoose"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
},
 email: {
    type: String,
    requied: true
 }, 
 subject: {
    type: String,
    requied: true
 },
 message: {
    type: String,
    required: true
 },
})


export const User = mongoose.model("User", userSchema );
export default User;