import React, { useContext } from 'react'
import ArchimedesLogo from '../assets/archimedes2.svg'
import './Home.css'
import HeroTitle from '../components/HeroTitle'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import Button from '@mui/material/Button';

import NotificationContext from "../context/NotificationContext";
import { Snackbar } from '@mui/material';


export default function Home() {

  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const { notifications } = useContext(NotificationContext);


  return (
    <div className='hero'>
        <div className='archimedes-logo'>
            <img src={ArchimedesLogo} alt="Archimedes" />
        </div>
        <div className='hero-text'>
          <h1 className='title-with-hr hero-title'>Archimedes</h1>
          <HeroTitle />
          <Button style={{maxWidth:350, marginBlock:4}} onClick={() => navigate('/new-submission')} variant="contained">ADD SUBMISSION</Button>
        </div>
 
    </div>
    
  )
}
