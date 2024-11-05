import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalForm from '../Constents/ModalForm';
import ComanTable from '../Constents/ComanTable';
import { useSelector } from 'react-redux';

const UserDetails = () => {

   const userDetails =  useSelector(state => state.user.data)

    const [FormShown, setFormShown] = useState(false);
    // const [data, setdata] = useState([])

    const columns = [
        { header: 'ID', field: 'id' },
        { header: 'Name', field: 'name' },
        { header: 'Phone Number', field: 'phone' },
        { header: 'Action', field: 'action' }
    ];

    const data = [
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210' },
        { id: 3, name: 'Alice Johnson', phone: '555-123-4567' }
    ];

    // Function to handle delete action
    const handleDelete = (id) => {
        console.log(`Delete user with ID: ${id}`);
        // Implement delete logic here
    };

    // Function to handle edit action
    const handleEdit = (id) => {
        console.log(`Edit user with ID: ${id}`);
        // Implement edit logic here (e.g., populate the modal with user data)
        setFormShown(true); // Show modal for editing
    };

    const handleCall = (phoneNumber) => {
        // Redirect to dialer on mobile devices
        if (isMobile()) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            alert("Calling feature is only available on mobile devices.");
        }
    };

    // Function to check if the user is on a mobile device
    const isMobile = () => {
        return /Mobi|Android/i.test(navigator.userAgent);
    };


    return (
        <>
            {FormShown && <ModalForm setFormShown={setFormShown} FormShown={FormShown} />}
            <div className="row">
                <div className="col-12 text-center mt-5 mb-3">
                    <h1>User Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-end mb-3">
                    <Link onClick={() => setFormShown(true)} className='bg-primary text-light p-2 rounded'>
                        Add User
                    </Link>
                </div>
            </div>
     
            <ComanTable 
                columns={columns}
                data={data}
                onCall={handleCall}
                onDelete={handleDelete}
                onEdit={handleEdit}
                name="user"

            />
        </>
    );
};

export default UserDetails;
