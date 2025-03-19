import React, { useState, useContext } from 'react';
import NtuaHeader from '../components/NtuaHeader';
import './NewSubmission.css';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import axiosInstance from '../api/api';
import AuthContext from '../context/AuthContext';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AlertSnack from '../components/AlertSnack';

export default function NewSubmission() {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [submissionName, setSubmissionName] = useState('');
  const [locationsFile, setLocationsFile] = useState(null);
  const [numVehicles, setNumVehicles] = useState('');
  const [depot, setDepot] = useState('');
  const [maxDistance, setMaxDistance] = useState('');

  const [alertState, setAlertState] = useState({
    open: false,
    severity: "error",
    message: null
  });

  function isJSONFile(file) {
    const fileNameParts = file.name.split('.');
    const fileExtension = fileNameParts[fileNameParts.length - 1].toLowerCase();
    return fileExtension === 'json';
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!submissionName || !locationsFile || !numVehicles || !depot || !maxDistance) {
      setAlertState({
        open: true,
        severity: 'error',
        message: 'Ensure all fields contain valid data.',
      })
      return;
    }

    if (!isJSONFile(locationsFile)) {
      setAlertState({
        open: true,
        severity: 'error',
        message: 'Only JSON files allowed!',
      })
      return;
    }

    const formData = new FormData();
    formData.append('name', submissionName);
    formData.append('numVehicles', parseInt(numVehicles));
    formData.append('depot', parseInt(depot));
    formData.append('maxDistance', parseFloat(maxDistance));
    formData.append('locations', locationsFile);

    try {
      const response = await axiosInstance.post('/problem/create-submission', formData, {
        headers: {
          'Authorization': `Bearer ${authTokens}`,
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/my-submissions', { replace: true });
    } catch (error) {
      const error_code = error.response.status;
      if (error_code === 401) 
        logoutUser();
      else 
        setAlertState({
          open: true,
          severity: 'error',
          message: error?.response?.data?.message || "An unexpected error occurred"
        })
    }
  }

  const handleCloseSnackbar = () => {
    setAlertState({
      open: false,
      severity: "error",
      message: null
    })
  };

  return (
    <>
      <NtuaHeader />
      <div className='new-submission-wrapper shadow-wrapper'>
        <h1 className='title-with-hr new-submission-title'>New Submission</h1>
        <div className='form-wrapper'>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth size='small'>
              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required id="submission_name" label="Submission Name" variant="outlined" size="small" value={submissionName} onChange={(e) => setSubmissionName(e.target.value)} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <FormLabel htmlFor='locations'>Locations JSON File</FormLabel>
                <TextField required type="file" name="locations" id="submission_locations" variant="outlined" size="small" onChange={(e) => setLocationsFile(e.target.files[0])} inputProps={{ accept: 'application/json' }} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required type="number" id="submission_vehicles" label="Number of Vehicles" variant="outlined" size="small" value={numVehicles} onChange={(e) => setNumVehicles(e.target.value)} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required type="number" id="submission_depot" label="Depot" variant="outlined" size="small" value={depot} onChange={(e) => setDepot(e.target.value)} />
              </FormControl>

              <FormControl fullWidth size='small' className="input-metadata" sx={{ marginBlock: 1 }}>
                <TextField required type="number" id="submission_max_distance" label="Max Distance" variant="outlined" size="small" value={maxDistance} onChange={(e) => setMaxDistance(e.target.value)} />
              </FormControl>

              <Button style={{ maxWidth: 350, marginBlock: 4 }} variant="contained" type="submit">Submit</Button>
            </FormControl>
          </form>
        </div>
      </div>
      <AlertSnack open={alertState.open} onClose={handleCloseSnackbar} message={alertState.message} severity={alertState.severity}/>
    </>
  );
}
