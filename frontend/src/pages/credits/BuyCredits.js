import React, { useState } from 'react'
import axiosInstance from '../../api/api';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import Button from "@mui/material/Button"

export default function BuyCredits() {

    const {authTokens} = useContext(AuthContext);

    /*  A user can but at most 500 credits in one purchase   */
    const MAX_CREDITS = 500;
    const MIN_CREDITS = 1;

    const [newCredits, setNewCredits] = useState(MIN_CREDITS);
    const [err, setErr] = useState(null);
    const [succ, setSucc] = useState(null);

    async function buyCredits(e) {
        e.preventDefault();
        setSucc(null);
        setErr(null);
        if (!newCredits)
            return;

        const payload = {
            newCredits: parseInt(newCredits)
        }
        const headers = {
            'Authorization': `Bearer ${authTokens}`,
            'Content-Type': 'application/json',
        }
        try {
            const response = await axiosInstance.post('/credits/buy-credits', payload,  {headers});
            setSucc("Credits bought successfully.")
            setNewCredits(MIN_CREDITS);
        } catch (err) {
            setErr("Something went wrong. Try again later.")
        }
    }

  return (
    <div className='account-credits-container shadow-wrapper'>
        <form className='auth-inputs' onSubmit={(e) => buyCredits(e)}>
            <div className='auth-input'>
                <label for='username' style={{color: 'inherit', textAlign:'left'}}>New Credits:</label>
                <input type='number' min={MIN_CREDITS} max={MAX_CREDITS} name='newcredits' value={newCredits} onChange={(e) => {setNewCredits(e.target.value)}} />
            </div>



            {err && <p className='form-error message'>{err}</p>}
            {succ && <p className='form-success message'>{succ}</p>}

            {/* <button type='submit'>Buy Credits</button> */}
            <Button style={{maxWidth:350, marginBlock:4}} type="submit" variant="contained">Buy Credits</Button>

        </form>
    </div>
  )
}
