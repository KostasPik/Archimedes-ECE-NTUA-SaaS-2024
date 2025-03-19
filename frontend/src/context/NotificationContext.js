import React, { createContext, useState, useEffect, useRef, useContext } from 'react';
import AuthContext from './AuthContext';
import io from 'socket.io-client';
import { Snackbar } from '@mui/material';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);
    const [snackbarQueue, setSnackbarQueue] = useState([]); // Queue for multiple Snackbars
    const { authTokens } = useContext(AuthContext);
    
    const socketRef = useRef(null);
    const snackbarRefs = useRef([]); 

    useEffect(() => {
        
        if (authTokens && !socketRef.current) {
            socketRef.current = io("http://127.0.0.1:9000", {
                query: { token: authTokens },  // Pass authTokens as query params
                reconnectionAttempts: 10,      // Automatically attempt to reconnect
                reconnectionDelay: 1000,       // Delay between reconnection attempts
            });

            socketRef.current.on('connect', () => {
                console.log('Connected to Notifications Service');
                // Emit 'join' event to join a room after connecting or reconnecting
                socketRef.current.emit('join', { token: authTokens });
            });

            socketRef.current.on('notification', (data) => {
                console.log('Received notification:', data.message);
                
                setSnackbarQueue(prevQueue => [...prevQueue, data.message]);
                setNotifications(prevNotifications => [...prevNotifications, data.message]);
            });

            socketRef.current.on('reconnect', () => {
                console.log('Reconnected to Notifications Service');
                socketRef.current.emit('join', { token: authTokens });
            });
        }

        return () => {
            if (socketRef.current && authTokens) {
                socketRef.current.off('notification');
            }
        };
    }, [authTokens]); 

    const handleCloseSnackbar = (index) => {
        setSnackbarQueue(prevQueue => prevQueue.filter((_, i) => i !== index)); 
    };

    useEffect(() => {
        if (snackbarQueue.length > 0) {
            snackbarQueue.forEach((message, index) => {
                if (!snackbarRefs.current[index]) {
                    snackbarRefs.current[index] = setTimeout(() => {
                        handleCloseSnackbar(index);
                        snackbarRefs.current[index] = null; 
                    }, 3000);
                }
            });
        }

        // Cleanup timeout on unmount or when snackbarQueue changes
        return () => {
            snackbarQueue.forEach((_, index) => {
                if (snackbarRefs.current[index]) {
                    clearTimeout(snackbarRefs.current[index]);
                    snackbarRefs.current[index] = null; 
                }
            });
        };
    }, [snackbarQueue]);

    const contextData = {
        notifications,
        snackbarQueue,
        handleCloseSnackbar,
    };

    return (
        <NotificationContext.Provider value={contextData}>
            {children}
            {snackbarQueue.map((message, index) => (
                <Snackbar
                    key={index}
                    open={true}
                    onClose={() => handleCloseSnackbar(index)}
                    message={message} // Show the message
                    autoHideDuration={3000}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                    ContentProps={{
                        style: {
                            backgroundColor: '#007BFF', 
                            color: 'white', 
                            marginTop: index * 60,
                        },
                    }}
                    //style={{ backgroundColor: '#007BFF', color: 'white', marginTop: index * 60 }} // Customize Snackbar styling and margin
                />
            ))}
        </NotificationContext.Provider>
    );
};

export default NotificationContext;





