import React from 'react';

import StudentDetails from '../components/pure/student_details';
import PdfReader from '../components/pure/pdf_reader';
import HeaderDetails from '../components/pure/header_details';

const StudentDetailsPage = () => {

    return (
        <div>
            <HeaderDetails />
            <body>
                <div className="container">
                    <div class="row">
                        <StudentDetails />
                        <PdfReader />
                    </div>
                </div>
            </body>
        </div>
    );
}

export default StudentDetailsPage;
