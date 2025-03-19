import React, { useEffect, useState } from 'react'
import NtuaHeader from '../components/NtuaHeader'
import axiosInstance from '../api/api'
import AuthContext from '../context/AuthContext'
import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

export default function Results (){
    const { submission_id } = useParams();
    const {authTokens, logoutUser} = useContext(AuthContext);
    const [results, setResults] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
        try {
            const headers = {
                'Authorization': `Bearer ${authTokens}`,
                'Content-Type': 'application/json'
             }
            const response = await axiosInstance.get(`/problem/view-results/${ submission_id }`, { headers });
            setResults(response?.data?.raw_results);
        } catch(error) {
            console.log(error)
        }
    };
        fetchResults();
    }, [authTokens,results]);

    return (
    <div>
        <h1>Welcome to Results Page for submission { submission_id }</h1>
        <h2>{results}</h2>
    </div>
    )
}