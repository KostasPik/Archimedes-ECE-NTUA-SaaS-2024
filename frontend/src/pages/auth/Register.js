import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, Navigate } from 'react-router-dom';
import axiosInstance from '../../api/api';
import Button from '@mui/material/Button';
import AlertSnack from '../../components/AlertSnack';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';


export default function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [alertState, setAlertState] = useState({
        open: false,
        severity: "error",
        message: null
    })
    function handleClose() {
        setAlertState({
            open: false,
            severity: "error",
            message: null
        })
    }

    const navigate = useNavigate();

    async function handleLogin(e) {
        e.preventDefault();
        const payload = {
            username: username,
            first_name: firstName,
            last_name: lastName,
            password: password
        }
        try {
        const response = await axiosInstance.post('/auth/register', payload);
            navigate('/auth/login', {replace:true})
        } catch (error) {
            setAlertState({
                open: true,
                severity:'error',
                message: error?.response?.data?.msg || "Something went wrong."
            })
        }
    
    }

  return (
    <>
    <div className='form-wrapper'>
        <h3 className='auth-title'>Sign Up</h3>
        <form className='auth-inputs' onSubmit={(e) => handleLogin(e)}>
            {/* <div className='auth-input'>
                <label for='username'>Username:</label>
                <input type='text' name='username' value={username} onChange={(e) => {setUsername(e.target.value)}} />
            </div>
            
            <div className='auth-input'>
                <label for='firstname'>First Name:</label>
                <input type='text' name='firstname' value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
            </div>

            <div className='auth-input'>
                <label for='lastname'>Last Name:</label>
                <input type='text' name='lastname' value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
            </div>

            <div className='auth-input'>
                <label for='password'>Password:</label>
                <input type='password' name='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
            </div> */}
            <FormControl fullWidth size='small' sx={{marginBottom:2}}>
              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="username" label="Username" autoCapitalize='false' variant="outlined" size="small" value={username} onChange={(e) => {setUsername(e.target.value)}} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="firstname" label="First name" autoCapitalize='false' variant="outlined" size="small" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="lastname" label="Last name" autoCapitalize='false' variant="outlined" size="small" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="password" label="Password" type='password' variant="outlined" size="small" value={password} onChange={(e) => {setPassword(e.target.value)}} />
              </FormControl>

              <Button style={{maxWidth:'100%'}} size="small" type="submit" variant="contained">Sign Up</Button>
        </FormControl>

            {/* {err && <p className='form-error message'>{err}</p>} */}
            {/* {succ && <p className='form-success message'>{succ}</p>} */}

            {/* <button type='submit'>Sign Up</button> */}
            {/* <Button style={{maxWidth:350, marginBlock:4}} type="submit" variant="contained">Sign Up</Button> */}

            <p>Already have an account? Login <Link to={'/auth/login'} className='auth-link'>here!</Link></p>    
        </form>
        
        <AlertSnack open={alertState.open} handleClose={handleClose} message={alertState.message} severity={alertState.severity}/>
    </div>
    </>
  )
}