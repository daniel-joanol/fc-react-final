import React, { useState, useEffect, useCallback } from 'react';

import StudentsTable from '../components/pure/students-table';
import HeaderDashboard from '../components/pure/header_dashboard';
import Filters from '../components/pure/filters';

import { AuthContext } from '../AppRouting';
import { deleteCandidate, getAll, getAllFiltered} from '../services/axiosService';
import { Student} from '../models/student.class.js';

const Dashboard = () => {

const { state: authState } = React.useContext(AuthContext);
const [candidates, setCandidates] = useState([]);

useEffect(() => {
  getAllCandidates()
}, [getAllCandidates, delCandidate])

  const getAllCandidates = useCallback(() => {
    getAll(authState.token)
      .then((response) => {

        //Create the students objects
        const candidatesList = [];
        for (let i = 0; i < response.data.length; i++){

            const actualStudent = new Student(
                response.data[i].id,
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

  const getCandidatesFilter = (filter) => {

      getAllFiltered(filter, authState.token)
        .then((response) => {
          const candidatesList2 = [];
          for (let i = 0; i < response.data.length; i++){

              const actualStudent2 = new Student(
                  response.data[i].id,
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
              
              candidatesList2.push(actualStudent2);
          }
          
          setCandidates(candidatesList2)
        })
        .catch((error) => {
          console.log(error)
        })
  }

  const delCandidate = (id) => {
    deleteCandidate(id, authState.token)
      .then((response) => {
        console.log(response)
        getAllCandidates()
      })
      .catch((error) => {
        console.log(error)
      })
  }

    return (
        <div>
            <HeaderDashboard />
            <body>
              <div className='row'>
              <div className='col-9'>            
                <StudentsTable delCandidate={delCandidate} candidates={ candidates }/>
              </div>  
              <div className='col-3'>
                  <Filters getCandidatesFilter={getCandidatesFilter}></Filters>
              </div>
              </div>
            </body>
        </div>
    );
}

export default Dashboard;
