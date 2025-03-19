import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { Snackbar, Button } from '@mui/material';
import NotificationContext from '../context/NotificationContext'; 
import './Notifications.css';


export default function Notifications() {
    const { notifications } = useContext(NotificationContext);

    const refreshNotifications = () => {
        // Reloads the current page to refresh notifications
        window.location.reload();
    };

    return (
        <div className="notifications-container">
        <h1>My Notifications</h1>
        {/* Display all notifications */}
        <ul className="notifications-list">
            {notifications.map((notification, index) => (
                <li className="notification-item" key={index}>
                    {notification}
                </li>
            ))}
        </ul>
        {notifications.length > 1 && (
                <Button 
                    variant="contained" 
                    onClick={refreshNotifications}
                    style={{
                        marginTop: '20px',
                        backgroundColor: '#007BFF', 
                        color: 'white',
                    }}
                >
                    Mark as Read
                </Button>
            )}
        </div>
    );
}
