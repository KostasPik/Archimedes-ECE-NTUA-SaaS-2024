import React from 'react'
import Button from '@mui/material/Button';


export function TableButtonRun({runSubmission, row}) {
  return (
    <Button style={{maxWidth:350, marginBlock:4}} onClick={() => runSubmission(row.id)} size="small" variant="contained" type="submit" disabled={row.status === "RUNNING" || row.status ==="READY"}>Run</Button>

  )
}

export function TableButtonDelete({deleteSubmission, row}) {
  return (
    // <Button style={{maxWidth:350, marginBlock:4, color:'red', background:'white', border:'dashed'}} onClick={() => deleteSubmission(row.id)} size="small" variant="contained" type="submit">Delete</Button>
    <Button style={{maxWidth:350, marginBlock:4}} color='error' onClick={() => deleteSubmission(row.id)} disabled={row.status === "RUNNING"} size="small" variant="contained" type="submit">Delete</Button>

  )
}