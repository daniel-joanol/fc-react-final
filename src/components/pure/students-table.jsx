import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import StudentComponent from './student_component';

import AddStudent from '../../components/buttons/add_student';
import { AuthContext } from '../../AppRouting';
import { useLocation } from 'react-router-dom'

const StudentsTable = ({ delCandidate, candidates }) => {

  const { state: authState } = React.useContext(AuthContext);
  const { state } = useLocation();

  useEffect(() => {
    
  }, [delCandidate]);

  const sortTable = (n) => {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;

        dir = "asc";
        
        while (switching) {
          
          switching = false;
          rows = table.rows;
          
          for (i = 1; i < (rows.length - 1); i++) {
            
            shouldSwitch = false;
            
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            
            if (dir == "asc") {
              if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                
                shouldSwitch = true;
                break;
              }
            } else if (dir == "desc") {
              if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
              }
            }
          }
          if (shouldSwitch) {
            
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            switchcount ++;
          } else {
            
            if (switchcount == 0 && dir == "asc") {
              dir = "desc";
              switching = true;
            }
          }
        }
  }

  const search = () => {
    var input, filter, table, tr, tdName, tdCity, tdEmail, i, txtValue;
        input = document.getElementById("input_search");
        filter = input.value.toUpperCase();
        table = document.getElementById("myTable");
        tr = table.getElementsByTagName("tr");
      
        for (i = 0; i < tr.length; i++) {
          var tdName = tr[i].getElementsByTagName("td")[0];
          var tdCity = tr[i].getElementsByTagName("td")[1];
          var tdEmail = tr[i].getElementsByTagName("td")[4];
          if (tdName, tdCity, tdEmail) {
            var txtValueName = tdName.textContent || tdName.innerText;
            var txtValueCity = tdCity.textContent || tdCity.innerText;
            var txtValueEmail = tdEmail.textContent || tdEmail.innerText;
            if (txtValueName.toUpperCase().indexOf(filter) > -1 || txtValueCity.toUpperCase().indexOf(filter) > -1 || txtValueEmail.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
  }  




    return (
        <div>
            <div className='row'>
              <div className='col-6'>
                <div className="search">
                  <span id="alumno_search">Alumno</span> <input type="text" id="input_search" onKeyUp={ search } placeholder="Buscar por nombre, email o ciudad" />
                </div>
              </div>
              <div className='col-6'><AddStudent/></div>
            </div>
          <table className="table table-hover" id="myTable">
            <thead>
            <tr>
              <th scope="col" onClick={() => sortTable(0)}><span className="text-header">NOMBRE  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
              <th scope="col" onClick={() => sortTable(1)}><span className="text-header">CIUDAD  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
              <th scope="col" onClick={() => sortTable(2)}><span className="text-header">PAÍS  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
              <th scope="col">TELÉFONO</th>
              <th scope="col" onClick={() => sortTable(4)}><span className="text-header">CORREO ELETRÓNICO <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
              <th scope="col" onClick={() => sortTable(5)}><span className="text-header">ETIQUETAS <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></span></th>
              <th></th>
            </tr>
              </thead>
                <tbody>
                
                { candidates.map((student, index) => {
                              return (
                                      <StudentComponent
                                          delCandidate={delCandidate}
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

StudentsTable.propTypes = {
  candidates: PropTypes.array.isRequired
};


export default StudentsTable;

