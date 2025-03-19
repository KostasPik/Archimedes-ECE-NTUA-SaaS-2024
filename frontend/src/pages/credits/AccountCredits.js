import React, { useEffect, useState } from 'react'
import axiosInstance from '../../api/api'
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import './AccountCredits.css'

import NotificationContext from "../../context/NotificationContext";
import { Snackbar } from '@mui/material';

export default function AccountCredits() {

    const {authTokens, logoutUser} = useContext(AuthContext);
    const { notifications } = useContext(NotificationContext);

    const [credits, setCredits] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchCredits() {
        const headers = {
            'Authorization': `Bearer ${authTokens}`,
            'Content-Type': 'application/json',
        }
        try {
            const response = await axiosInstance.get('/credits/get-credits', {headers})
            setCredits(response?.data?.credits);
            setLoading(false);
        } catch (error) {
            const error_code = error.response.status;
            if (error_code === 401)
                logoutUser();
        }

    }

    useEffect( () => {
        fetchCredits();
    }, [])


    if (loading) 
        return <div>Loading...</div>

    return (
        <div className='account-credits-container shadow-wrapper'>
            <h4>Total Account Credits</h4>
            <div className='credits-num'>
                {credits}
            </div>

        </div>
    )
}
