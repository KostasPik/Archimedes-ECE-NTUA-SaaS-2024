import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
import  AuthContext  from '../../context/AuthContext';
import {useContext} from "react";
import Button from '@mui/material/Button';
import AlertSnack from '../../components/AlertSnack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default function Login() {

    const {saveTokens} = useContext(AuthContext);


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertState, setAlertState] = useState({
        open: false,
        severity: "error",
        message: null
    })

    const navigate = useNavigate();

    function handleClose() {
        setAlertState({
            open: false,
            severity: "error",
            message: null
        })
    }

    async function handleLogin(e) {
        e.preventDefault();
        if (!username || !password)
            return;

        const payload = {
            username: username,
            password: password,
        }
        try {
            const response = await axiosInstance.post('/auth/login', payload);
            const token = response?.data?.data?.token
            saveTokens(token);
            navigate('/', {replace:true})
        }
        catch(error) { 
            setAlertState({
                open: true,
                severity: "error",
                message: error?.response?.data?.msg || "Something went wrong."
            })
        }
    }

  return (
    <>
    <div className='form-wrapper'>
    <h3 className='auth-title'>Sign In</h3>
    <form className='auth-inputs' onSubmit={handleLogin}>
        {/* <div className='auth-input'>
            <label for='username'>Username:</label>
            <input type='text' name='username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
        </div>

        <div className='auth-input'>
            <label for='password'>Password:</label>
            <input type='password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
        </div>

        <Button style={{maxWidth:350, marginBlock:4}} type="submit" variant="contained">Sign In</Button>

        <p>Don't have an account? Register <Link to={'/auth/register'} className='auth-link'>here!</Link></p>     */}
        <FormControl fullWidth size='small' sx={{marginBottom:2}}>
              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="username" label="Username" autoCapitalize='false' variant="outlined" size="small" value={username} onChange={(e) => {setUsername(e.target.value)}} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="password" type='password' label="Password" variant="outlined" size="small" value={password} onChange={(e) => {setPassword(e.target.value)}} />
              </FormControl>

              <Button style={{maxWidth:'100%'}} size="small" type="submit" variant="contained">Sign In</Button>
        </FormControl>
            <p>Don't have an account? Register <Link to={'/auth/register'} className='auth-link'>here!</Link></p>

    </form>
    </div>
    <AlertSnack open={alertState.open} handleClose={handleClose} severity={alertState.severity} message={alertState.message}/>
    </>
  )
}