import React from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert  from '@mui/material/Alert';
import './AlertSnack.css'


export default function AlertSnack({open, handleClose, severity, message}) {

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
    <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: '100%' }}
    >
        {message}
    </Alert>
    </Snackbar>
  )
}
