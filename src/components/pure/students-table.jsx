import React, { useState, useEffect } from 'react';

import { Student } from '../../models/student.class';
import StudentComponent from './student_component';
import { AuthContext } from '../../AppRouting';
import { getAll} from '../../services/axiosService';

const StudentsTable = () => {

  const { dispatch } = React.useContext(AuthContext);
  const { state: authState } = React.useContext(AuthContext);

  const [candidates, setCandidates] = useState([]);

  const getAllCandidates = () => {
    getAll(authState.token)
      .then((response) => {
        console.log(response)
        setCandidates(response.data)
      })
      .catch((error) => {
        console.log(`Error: ${error}`)
      })
  }

  useEffect(() => {
    getAllCandidates()
  }, []);

  const sortTable = ({n}) => {}

    

    return (
        <div>
    <table className="table table-hover" id="myTable">
      <thead>
      <tr>
        <th scope="col" onclick={() => sortTable(0)}><span className="text-header">NOMBRE  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
        <th scope="col" onclick={() => sortTable(1)}><span className="text-header">CIUDAD  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
        <th scope="col" onclick={() => sortTable(2)}><span className="text-header">PAÍS  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
        <th scope="col">TELÉFONO</th>
        <th scope="col" onclick={() => sortTable(4)}><span className="text-header">CORREO ELETRÓNICO <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
        <th scope="col" onclick={() => sortTable(5)}><span className="text-header">ETIQUETAS <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
      </tr>
        </thead>
          <tbody>
           
          { candidates.map((student, index) => {
                        return (
                                <StudentComponent
                                    key={index} 
                                    student={student}
                                >
                                </StudentComponent>
                            )
                        }
                    )}

          </tbody>
        </table>
    </div>
    );
}

export default StudentsTable;
