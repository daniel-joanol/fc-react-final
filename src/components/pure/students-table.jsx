import React, { useState } from 'react';

import { Student } from '../../models/student.class';
import StudentComponent from './student_component';

const StudentsTable = () => {

  const student1 = new Student('Mark Otto', 'Avila', 'España', '+34 999345122', 'mark@yahoo.com', ['Java', 'Spring']);
  const student2 = new Student('Juan Bermudez', 'Barcelona', 'España', '+34 992345122', 'juan@gmail.com', ['CSS-HTML', 'React']);
  const student3 = new Student('Maria Gomez', 'Floripa', 'Brasil', '+55 921934512', 'maria@hotmail.com', ['Java', 'Python']);
  const student5 = new Student('Ricardo Silva', 'Rio de Janeiro', 'Brasil', '+55 879345122', 'ricardo@hotmail.com', ['React', 'Spring', 'JavaScript', 'Java']);
  const student4 = new Student('Raquel Tejeda', 'Madrid', 'España', '+34 979345122', 'raquel@yahoo.com', ['Java', 'Spring']);

  const [students, setStudents] = useState([student1, student2, student3, student4, student5]);

  const sortTable = ({n}) => {}

    

    return (
        <div>
    <table className="table table-hover" id="myTable">
      <thead>
      <tr>
        <th scope="col" onclick={() => sortTable(0)}><spam className="text-header">NOMBRE  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></spam></th>
        <th scope="col" onclick={() => sortTable(1)}><spam className="text-header">CIUDAD  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></spam></th>
        <th scope="col" onclick={() => sortTable(2)}><spam className="text-header">PAÍS  <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></spam></th>
        <th scope="col">TELÉFONO</th>
        <th scope="col" onclick={() => sortTable(4)}><spam className="text-header">CORREO ELETRÓNICO <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></spam></th>
        <th scope="col" onclick={() => sortTable(5)}><spam className="text-header">ETIQUETAS <img src={require('../../images/orden_alfabetica.png')} className="orden_alfabetica" /></spam></th>
      </tr>
        </thead>
          <tbody>
           
          { students.map((student, index) => {
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
