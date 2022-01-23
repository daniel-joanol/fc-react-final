import React from 'react';

import StudentDetails from '../components/pure/student_details';
import HeaderDetails from '../components/pure/header_details';

import { AuthContext } from '../AppRouting';
import { useLocation } from 'react-router-dom';

const StudentDetailsPage = () => {

    const { state: authState } = React.useContext(AuthContext);
    const { state } = useLocation();

    return (
        <div>
            <HeaderDetails />
            <body>
                <div className="container">
                        <StudentDetails id={state.id} token={authState.token}/>
                </div>
            </body>
        </div>
    );
}

export default StudentDetailsPage;
