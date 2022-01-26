import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Student } from '../../models/student.class'

const StudentComponent = ({delCandidate, student}) => {

    const navigate = useNavigate();

    const goToDetails = (e) => {
        e.preventDefault();
        navigate('/detalles', { state : student});
    }

    return (

        <tr>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.fullname}</td>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.city}</td>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.country}</td>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.phone}</td>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.email}</td>
            <td onClick={ goToDetails } style={{ cursor: 'pointer'}}>{student.tags.map((tag, index) => {
                if (index < 3){
                    return (
                    <span className='etiqueta-table-page'>{tag}</span>
                )
                } else if (index === 3){
                    return (
                        <span className='etiqueta-table-page'> + {student.tags.length - 3} </span>
                    )
                }
            
        })}</td>
        <td onClick={ () => delCandidate(student.id) } style={{ cursor: 'pointer'}}><img className="deleteCandidate" src={require('../../images/trash.png')}></img></td>
        </tr>
    );
}

StudentComponent.propTypes = {
    student: PropTypes.instanceOf(Student).isRequired,
    delCandidate: PropTypes.func.isRequired
}

export default StudentComponent;
