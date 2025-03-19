import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { NotificationProvider } from './context/NotificationContext';

import Auth from './pages/auth/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

import './App.css';
import MyDrawer from './components/MyDrawer';
import Home from './pages/Home';
import Credits from './pages/credits/Credits';
import NewSubmission from './pages/NewSubmission';
import MySubmissions from './pages/MySubmissions';
import UserProtectedRoute from './utils/UserProtectedRoute';
import Notifications from './pages/Notifications';
import Statistics from './pages/Statistics';


function App() {
  return (
    <div className="App">
      <Router>
      <AuthProvider>
      <NotificationProvider> 
        <MyDrawer />

        <Routes>

              <Route path='/' exact element={<Home />} />
              <Route path='/my-submissions' exact element={<UserProtectedRoute><MySubmissions /></UserProtectedRoute>} />
              <Route path='/credits' exact element={<UserProtectedRoute><Credits /></UserProtectedRoute>} />
              <Route path='/new-submission' exact element={<UserProtectedRoute><NewSubmission /></UserProtectedRoute>} />
              <Route path='/my-notifications' exact element={<UserProtectedRoute><Notifications /></UserProtectedRoute>} />
              <Route path='/my-statistics' exact element={<UserProtectedRoute><Statistics /></UserProtectedRoute>} />

              <Route path='/auth' exact element={<Auth/>}>
                <Route path='login/' element={<Login/>} />
                <Route path='register/' element={<Register/>} />
              </Route>

        </Routes>
        </NotificationProvider> 
      </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
