import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUser } from '../../services/userService';

const UserProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const userData = await fetchUser(id);
      setUser(userData);
    };
    getUser();
  }, [id]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {user ? (
        <>
          <h1 style={{ fontSize: '2em', margin: '10px 0', color: '#333' }}>
            {user.first_name} {user.last_name}
          </h1>
          <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={{borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover',  margin: '20px 0' }} />
          <p style={{fontSize: '1.2em', color: '#555'}}>Email: {user.email}</p>
        </>
      ) : (
        <p style={{ fontSize: '1.2em', color: '#999' }}>Loading...</p>
      )}
    </div>
  );
};
export default UserProfile;
