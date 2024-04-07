import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link ,useNavigate, useParams } from 'react-router-dom';
export default function EditUser() {
 let navigate= useNavigate();
 const {id}=useParams();
 const [user, setUsers] = useState({
 name: "",
 username: "",
 email: ""
 })
 useEffect(()=>{
 loadUser()
 },[])
 const { name, username, email } = user;
 const onInputChange = (e) => {
 setUsers({ ...user, [e.target.name]: e.target.value })
 }
 const onSubmit = async(e) => {
 e.preventDefault();
 await axios.put(`http://localhost:8088/user/${id}`,user)
 navigate("/")
 }
 const loadUser =async() =>{
 const result= await axios.get(`http://localhost:8088/user/${id}`)
 setUsers(result.data)
 }
 return (
 <div class="container">
 <div class="row">
 <div class="col-md-6 offset-md-3 border round p-4 mt-3 shadow">
 <h2 class="text-center m-4">Edit User</h2>
 <form onSubmit={(e)=>{onSubmit(e)}}>
 <div class="mb-3">
 <label htmlFor="Name" class="form-label">
 Name
 </label>
 <input type='Text' class="form-control" placeholder='Enter your name'
 name='name' value={name} onChange={(e) => onInputChange(e)}>
 </input>
 </div>
 <div class="mb-3">
 <label htmlFor="Username" class="form-label">
 User Name
 </label>
 <input type='Text' class="form-control" placeholder='Enter your User name'
 name='username' value={username} 
 onChange={(e) => onInputChange(e)}>
 </input>
 </div>
 <div class="mb-3">
 <label htmlFor="Email" class="form-label">
 Email
 </label>
 <input type='Text' class="form-control" placeholder='Enter your Email'
 name='email' value={email} onChange={(e) => onInputChange(e)}></input>
 </div>
 <button type='submit' class="btn btn-outline-primary">Submit</button>
 <Link class="btn btn-outline-danger mx-2" to="/" >Cancel</Link>
 </form>
 </div>
 </div>
 </div>
 )
}
