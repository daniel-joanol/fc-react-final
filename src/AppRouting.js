import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'

import Dashboard from './pages/dashboard_page';
import LoginPage from './pages/login_page'
import StudentDetailsPage from './pages/student_details_page';
import ForgotPassPage from './pages/forgot_pass_page';
import NewPassPage from './pages/new_pass_page';

export const AuthContext = React.createContext();

const initialState = {
    isAuthenticated: localStorage.getItem("token") && localStorage.getItem("username") ? true : false,
    username: localStorage.getItem("username") ? localStorage.getItem("username").replace(/['"]+/g, '') : null,
    token: localStorage.getItem("token") ? localStorage.getItem("token").replace(/['"]+/g, '') : null,
}

const reducer = (state, action) => {
    switch (action.type) {
      case "LOGIN":
        localStorage.setItem("username", JSON.stringify(action.payload.data.username));
        localStorage.setItem("token", JSON.stringify(action.payload.data.token));
        return {
          ...state,
          isAuthenticated: true,
          username: action.payload.data.username,
          token: action.payload.data.token
        };
      case "LOGOUT":
        localStorage.clear();
        return {
          ...state,
          isAuthenticated: false,
          username: null,
          token: null
        };
      default:
        return state;
    }
  };

function AppRouting() {

    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <AuthContext.Provider value={{ state, dispatch}}>
            <Router>
                <Routes>
                    <Route path='' element={<Navigate replace to='/login' />} />
                    <Route path='/login' element={ <LoginPage /> }/>
                    <Route path='/dashboard' element={ <Dashboard /> } />
                    <Route path='/detalles' element={ <StudentDetailsPage />} />
                    <Route path='/forgot' element={ <ForgotPassPage />} />
                    <Route path='/new-pass' element={ <NewPassPage />} />
                </Routes>
            </Router>
        </AuthContext.Provider>
    );
}

export default AppRouting;
