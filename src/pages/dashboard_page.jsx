import React from 'react';

import AddStudent from '../components/buttons/add_student';
import SearchBox from '../components/pure/search_box';
import StudentsTable from '../components/pure/students-table';
import HeaderDashboard from '../components/pure/header_dashboard';

const Dashboard = () => {

    return (
        <div>
            <HeaderDashboard />
            <body>
            <div className='row'>
                <div className='col-6'><SearchBox /></div>
                <div className='col-6'><AddStudent /></div>
            </div>
            
            <StudentsTable />
            </body>
        </div>
    );
}

export default Dashboard;
