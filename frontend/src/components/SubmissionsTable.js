import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './SubmissionsTable.css'
import Button from '@mui/material/Button';
import {TableButtonRun, TableButtonDelete} from './TableButton';
import { Link, Navigate } from 'react-router-dom';
import Chip from '@mui/material/Chip';
import './SubmissionsTable.css'


function extractFilename(path) {
    if (!path)
        return '';
    const splittedPath = path.split("/");
    const filename = splittedPath[splittedPath.length - 1];
    return filename;
}

function getChipFromStatus(status) {
  if (!status)
    return <Chip label="UNKNOWN" size="small" />
  const statusCompare = status.trim().toUpperCase();
  
  switch(statusCompare) {
    case "FAILED":
        return <Chip label="FAILED" color="error" size="small"/>
    case "READY":
        return <Chip label="READY" color="primary" size="small"/>
    case "RUNNING":
        return <Chip label="RUNNING" color="warning" size="small"/>
    case "IDLE":
        return <Chip label="IDLE" size="small"/>
    default:
        return <Chip label="UNKNOWN" size="small"/>
  }

}

function getProperTime(timestamp) {
  const date = new Date(timestamp);
  const options = {
      timeZone: 'Europe/Athens',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
  };
  const formatter = new Intl.DateTimeFormat('el-GR', options);
  const formattedDate = formatter.format(date);
  return formattedDate;
}


export default function SubmissionsTable({submissions, runSubmission, deleteSubmission, editSubmission}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Submission Name</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Num Vehicles</TableCell>
            <TableCell align="left">Depot</TableCell>
            <TableCell align="left">Max Distance</TableCell>
            <TableCell align="left">Locations</TableCell>
            <TableCell align="left">Action</TableCell>
            <TableCell align="left">Result</TableCell>
            <TableCell align="left">Submitted</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {submissions.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{getChipFromStatus(row.status)}</TableCell>
              <TableCell align="left">{row.num_vehicles}</TableCell>
              <TableCell align="left">{row.depot}</TableCell>
              <TableCell align="left">{row.max_distance}</TableCell>
              {/* <TableCell align="left">{extractFilename(row.locations_file)}</TableCell> */}
              <TableCell align="left"><Link className='locations-link' to={"/"+row.locations_file} target='_blank' replace={true}>{extractFilename(row.locations_file)}</Link></TableCell>
              <TableCell align="left">
                {/* <Button style={{maxWidth:350, marginBlock:4}} onClick={() => runSubmission(row.submission_id)} size="small" variant="contained" type="submit" disabled={row.status !== "IDLE"}>Run</Button> */}
                <TableButtonRun row={row} runSubmission={runSubmission}/>
                <TableButtonDelete row={row} deleteSubmission={deleteSubmission}/>
              </TableCell>
              <TableCell align="left">
              <Button
                  style={{ maxWidth: 350, marginBlock: 4 }}
                  size="small"
                  variant="contained"
                  type="submit"
                  disabled={row.status === "RUNNING" || row.status === "IDLE"}

                  // onClick={() => window.open(`/view-results/${row.id}`, '_blank', 'noopener')}>
                  onClick={() => window.open(`http://127.0.0.1/${row.result}`, '_blank', 'noopener')}>
                  Results
              </Button>

              </TableCell>
                <TableCell align="left">{getProperTime(row.created_on)} UTC</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}