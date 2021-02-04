import React from 'react';

const UserDetailComponent = ({user}) =>
   <div className="container">
        <div>
            <h6>Email: {user.email}</h6>
            <h6>Phone: {user.phone}</h6>
            <img src={user.profilePic}/>
        </div>
    </div>

export default UserDetailComponent;
