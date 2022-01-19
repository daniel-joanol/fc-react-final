import React from 'react';
import { useNavigate } from 'react-router-dom';

import SettingsBtn from '../buttons/settings';

const HeaderDetails = () => {

    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    } 

    return (
        <header>
            <div className='row row_header'>
                <div id='p_header_details'className='col-6' onClick={() => navigateTo('/dashboard')}>
                    <img src={require('../../images/go_back.png')}></img>
                    <p>Volver</p>
                </div>
                <div className='col-6 d-flex flex-row-reverse'>
                    <SettingsBtn />
                </div>
            </div>
        </header>
    );
}

export default HeaderDetails;
