import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

const UserCard = ({user})=>{
    return(
        <div className='user-card'>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
            <Link to={`/user/${user.id}`}>View Profile</Link>
        </div>
    );
};

export default UserCard;