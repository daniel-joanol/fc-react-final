import React from 'react';

import SettingsBtn from '../buttons/settings';

const HeaderDashboard = () => {
    return (
        <header>
            <div className='row row_header'>
                <div id='p_header_dashboard'className='col-6'>
                    <p>OpenBootcamp<span className="font_green bold"> | Alumnos</span></p>
                </div>
                <div className='col-6 d-flex flex-row-reverse'>
                    <SettingsBtn />
                </div>
            </div>
        </header>
    );
}

export default HeaderDashboard;
