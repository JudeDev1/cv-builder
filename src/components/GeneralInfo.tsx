import React from 'react';
import { useState } from 'react';

function GeneralInfo() {
    const [generalInfo, setGeneralInfo] = useState({
      name: "",
      email: "",
      address: "",
    })
    //const [isEditing, setIsEditing] = useState(true);

    const handleSubmit = (e) => {
       e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    value={generalInfo.name}
                    onChange={(e) => setGeneralInfo({ ...generalInfo, name: e.target.value })}
                />
                <input 
                    type="text"
                    name="email"
                    value={generalInfo.email}
                    onChange={(e) => setGeneralInfo({...generalInfo, email: e.target.value })}
                />
                <input 
                    type="text"
                    name="address"
                    value={generalInfo.address}
                    onChange={(e) => setGeneralInfo({...generalInfo, address: e.target.value })}
                />
            </form>
            <div>
                <p>Name: {generalInfo.name}</p>
                <p>Email: {generalInfo.email}</p>
                <p>Address: {generalInfo.address}</p>
            </div>
        </div>
    )
}

export default GeneralInfo;