import React, { useEffect, useState } from "react";
import "./MySubmissions.css";
import NtuaHeader from "../components/NtuaHeader";
import axiosInstance from "../api/api";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import SubmissionsTable from "../components/SubmissionsTable";
import AddIcon from "@mui/icons-material/Add";
import AlertSnack from "../components/AlertSnack";
import RefreshIcon from "@mui/icons-material/Refresh";
import Skeleton from "@mui/material/Skeleton";
import Pagination from '@mui/material/Pagination';

import NotificationContext from "../context/NotificationContext";


export default function MySubmissions() {
  const { authTokens, logoutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [mySubmissions, setMySubmissions] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const { notifications } = useContext(NotificationContext);

  // Used for displaying alert with error message.
  const [alertState, setAlertState] = useState({
    open: false,
    severity: "success",
    message: null,
  });

  function handleClose() {
    setAlertState({
      open: false,
      severity: "success",
      message: null,
    });
  }

  const navigate = useNavigate();

  async function fetchSubmissions() {
    setLoading(true);
    const headers = {
      Authorization: `Bearer ${authTokens}`,
      "Content-Type": "application/json",
    };

    try {
      const response = await axiosInstance.get(`/problem/my-submissions?page=${page}`, {
        headers,
      });
      setTotalPages(response?.data?.total_pages);
      setMySubmissions(response?.data?.submissions);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const error_code = error.response.status;
      if (error_code === 401) logoutUser();
    }
  }

  async function runSubmission(submissionID) {
    const payload = {
      submission_id: submissionID,
    };
    const headers = {
      Authorization: `Bearer ${authTokens}`,
      "Content-Type": "application/json",
    };
    try {
      const response = await axiosInstance.post(
        "/problem/run-submission",
        payload,
        { headers }
      );
      if (response?.status === 200) {
        setAlertState({
          open: true,
          severity: "success",
          message: "Submission placed for execution.",
        });
        fetchSubmissions();
      }
    } catch (error) {
      const error_code = error.response.status;
      if (error_code === 401) logoutUser();
      else
        setAlertState({
          open: true,
          severity: "error",
          message: error?.response?.data?.message || "Something went wrong.",
        });
    }
  }

  async function deleteSubmission(submissionID) {
    const headers = {
      Authorization: `Bearer ${authTokens}`,
    };

    try {
      const response = await axiosInstance.delete(
        `/problem/delete-submission/${submissionID}`,
        { headers }
      );
      if (response?.status === 200)
        // console.log("submission deleted successfully");
      fetchSubmissions();
    } catch (error) {
      // console.log(error.response.status);
    }
  }

  async function editSubmission(submission) {
    const headers = {
      Authorization: `Bearer ${authTokens}`,
      "Content-Type": "application/json",
    };
    const payload = {
      submission_id: submission.submission_id,
      num_vehicles: submission.num_vehicles,
      depot: submission.depot,
      max_distance: submission.max_distance,
    };
    try {
      const response = await axiosInstance.post(
        "/problem/edit-submission",
        payload,
        { headers }
      );
      if (response?.status === 200) fetchSubmissions();
    } catch (error) {
      const error_code = error.response.status;
      if (error_code === 401) logoutUser();
    }
  }

  useEffect(() => {
    fetchSubmissions();
  }, [page]);


  return (
    <>
      <NtuaHeader />
      <div className="my-submissions-wrapper shadow-wrapper">
        {loading ? (
          <>
            <div className="title-wrapper">
              <h1 className="title-with-hr">My Submissions</h1>
              <div className="buttons-wrapper">
                <Button
                  style={{ maxWidth: 350, margin: 4 }}
                  variant="contained"
                  type="submit"
                  color="secondary"
                  onClick={fetchSubmissions}
                  endIcon={<RefreshIcon />}
                >
                  Refresh
                </Button>

                <Button
                  style={{ maxWidth: 350, margin: 4 }}
                  variant="contained"
                  type="submit"
                  onClick={() => navigate("/new-submission", { replace: true })}
                  endIcon={<AddIcon />}
                >
                  New Submission
                </Button>
              </div>
            </div>
            <br />
            {Array(5)
              .fill(null)
              .map((_, index) => (
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={70}
                  style={{ marginBlock: 2 }}
                  key={index}
                />
              ))}
          </>
        ) : (
          <>
            {mySubmissions && mySubmissions.length === 0 ? (
              <>
                <h3>You have no submissions yet</h3>
                <Button
                  style={{ maxWidth: 350, marginBlock: 4 }}
                  variant="contained"
                  type="submit"
                  onClick={() => navigate("/new-submission", { replace: true })}
                  endIcon={<AddIcon />}
                >
                  New Submission
                </Button>
              </>
            ) : (
              <>
                <div className="title-wrapper">
                  <h1 className="title-with-hr">My Submissions</h1>
                  <div className="buttons-wrapper">
                    <Button
                      style={{ maxWidth: 350, margin: 4 }}
                      variant="contained"
                      type="submit"
                      color="secondary"
                      onClick={fetchSubmissions}
                      endIcon={<RefreshIcon />}
                    >
                      Refresh
                    </Button>

                    <Button
                      style={{ maxWidth: 350, margin: 4 }}
                      variant="contained"
                      type="submit"
                      onClick={() =>
                        navigate("/new-submission", { replace: true })
                      }
                      endIcon={<AddIcon />}
                    >
                      New Submission
                    </Button>
                  </div>
                </div>
                <div className="pagination-wrapper">
                  <Pagination count={totalPages} color="primary" page={page} onChange={(e, val) => {setPage(val)}} />
                </div>
                <div className="table-wrapper">
                  <SubmissionsTable
                    submissions={mySubmissions}
                    runSubmission={runSubmission}
                    deleteSubmission={deleteSubmission}
                    editSubmission={editSubmission}
                  />
                </div>
              </>
            )}
          </>
        )}
      </div>
      <AlertSnack
        open={alertState.open}
        handleClose={handleClose}
        severity={alertState.severity}
        message={alertState.message}
      />

    </>
  );
}
