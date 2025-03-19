import React, { useEffect, useState } from 'react'
import NtuaHeader from '../components/NtuaHeader'
import './Statistics.css'
import axiosInstance from '../api/api'
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import PieChart from '../components/PieChart';
import LineChart from '../components/LineChart';
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";

import NotificationContext from "../context/NotificationContext";
import { Snackbar } from '@mui/material';

function MetricCard({title, value}) {
    return (
        <div className='metric-wrapper'>
            <h4>{title}</h4>
            <h5>{value}</h5>
        </div>
    )
}

export default function Statistics() {
    const { authTokens, logoutUser } = useContext(AuthContext);
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const { notifications } = useContext(NotificationContext);

    async function fetchStatistics() {
            const headers = {
                Authorization: `Bearer ${authTokens}`,
                "Content-Type": "application/json",
            };

            const response = await axiosInstance.get('/problem/stats', {headers})
            setStats(response?.data);
            setLoading(false);
    }

    useEffect(() => {
        fetchStatistics();
    }, [])

    if (loading) return (
        <h1>loading...</h1>
    )

  return (
    <>
        <NtuaHeader />
        <div className='statistics-wrapper my-submissions-wrapper'>
            <div className='title-wrapper'>
                <h1 className="title-with-hr">My Statistics</h1>
                <div className="buttons-wrapper">
                <Button
                  style={{ maxWidth: 350, margin: 4 }}
                  variant="contained"
                  type="submit"
                  color="secondary"
                  onClick={fetchStatistics}
                  endIcon={<RefreshIcon />}
                >
                  Refresh
                </Button>
              </div>
            </div>
            <br/>
            <div className='metrics-container'>
                {(stats.avg_execution_time && stats.avg_execution_time > 0) && <MetricCard title={'Average Execution Time'} value={stats.avg_execution_time + ' sec'} />}
                {(stats.total_execution_time && stats.total_execution_time > 0) && <MetricCard title={'Total Execution Time'} value={stats.total_execution_time + ' sec'} />}
                <MetricCard title={'Total Submissions'} value={stats.total_submissions} />
            </div>
            {[stats.ready_submissions, stats.running_submissions, stats.failed_submissions, stats.idle_submissions].some(val => val > 0) && <PieChart labels={["Ready", "Running", "Failed", "Idle"]} title={"Submissions"} numbers={[stats.ready_submissions, stats.running_submissions, stats.failed_submissions, stats.idle_submissions]} />}
            {/* {(stats.num_vehicles_execution_times && stats.max_distance_execution_times) && <ScatterPlot data={stats} />} */}
            {(stats.num_vehicles_execution_times) && <LineChart title={"Number of Vehicles vs Execution Time"} labelY={"Number of vehicles"} dataset={stats.num_vehicles_execution_times} />}
            {(stats.max_distance_execution_times) && <LineChart title={"Maximum Distance vs Execution Time"} labelY={"Maximum Distabce"} dataset={stats.max_distance_execution_times} />}

        </div>

    </>
  )
}