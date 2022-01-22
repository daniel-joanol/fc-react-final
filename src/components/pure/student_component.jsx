import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import { Student } from '../../models/student.class'

const StudentComponent = ({student}) => {

    const navigate = useNavigate();

    const goToDetails = (e) => {
        e.preventDefault();
        navigate('/detalles', { state : student});
    }

    return (

        <tr onClick={ goToDetails } style={{ cursor: 'pointer'}}>
            <td>{student.fullname}</td>
            <td>{student.city}</td>
            <td>{student.country}</td>
            <td>{student.phone}</td>
            <td>{student.email}</td>
            <td>{student.tags.map((tag) => {
            return (
                <span className='etiqueta-table-page'>{tag}</span>
            )
        })}</td>
        </tr>
    );
}

StudentComponent.propTypes = {
    student: PropTypes.instanceOf(Student).isRequired,
    tags: PropTypes.array.isRequired
}

export default StudentComponent;
