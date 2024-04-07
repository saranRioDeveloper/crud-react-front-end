import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewUser() {
    const [user, setUser]=useState({
        name:"",
        username:"",
        email:""
    });

    const {id}=useParams();

    useEffect(()=> {
        loadUser();
    },[]);

    const loadUser = async ()   =>{
        const result = await axios.get(`http://localhost:8088/user/${id}`);
        setUser(result.data);
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3 border round p-4 mt-3 shadow">
                    <h2 class="text-center m-4">User Details</h2>
                    <div className='card'>
                        <div className='card-hearder'>
                            Details of user id :{user.id}
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <b>Name : </b>{user.name}
                                </li>
                                <li className='list-group-item'>
                                    <b>User Name : </b>{user.username}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email : </b>{user.email}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link class="btn btn-primary my-2" to={"/"}> Back to home </Link>
                </div>
            </div>
        </div>
    )
}
