import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUsers } from '../../services/userService';
import UserCard from "../../componets/UserCard/UserCard";

const UserList = ()=>{
    const {page} = useParams();
    const [users, setUsers]= useState([]);
    const currentPage = page || 1;  
    
    useEffect( ()=>{
        const getUsers = async()=>{
            const usersData = await fetchUsers(currentPage);
            setUsers(usersData);
        };
        getUsers();
    },[currentPage]);

    return(
        <div>
            <h1 style={{ textAlign: 'center' ,margin:'20px',color:'#90b6df'}}>Users - Page{currentPage}</h1>
            <div className="cards-container">
                {users.map(user => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
};

export default UserList;