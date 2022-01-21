import React, { useState, useEffect, useCallback } from 'react';

import AddStudent from '../components/buttons/add_student';
import SearchBox from '../components/pure/search_box';
import StudentsTable from '../components/pure/students-table';
import HeaderDashboard from '../components/pure/header_dashboard';

import { AuthContext } from '../AppRouting';
import { getAll} from '../services/axiosService';
import { Student} from '../models/student.class.js';

const Dashboard = () => {

const { state: authState } = React.useContext(AuthContext);
const [candidates, setCandidates] = useState([]);

  const getAllCandidates = useCallback(() => {
    getAll(authState.token)
      .then((response) => {
        console.log(response)

        //Create the students objects
        const candidatesList = [];
        for (let i = 0; i < response.data.length; i++){

            const actualStudent = new Student(
                response.data[i].fullname,
                response.data[i].city,
                response.data[i].country,
                response.data[i].phone,
                response.data[i].email,
                response.data[i].tags,
                response.data[i].remote,
                response.data[i].local,
                response.data[i].transfer,
                response.data[i].photo,
                response.data[i].curriculum
            )
            
            candidatesList.push(actualStudent);
        }
        setCandidates(candidatesList)

      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
  },[authState.token])

  useEffect(() => {
    getAllCandidates()
  }, [getAllCandidates])

    return (
        <div>
            <HeaderDashboard />
            <body>
            <div className='row'>
                <div className='col-6'><SearchBox /></div>
                <div className='col-6'><AddStudent /></div>
            </div>
            
            <StudentsTable candidates={ candidates }/>
            </body>
        </div>
    );
}

export default Dashboard;
