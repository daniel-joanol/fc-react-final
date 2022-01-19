import React from 'react';

const SettingsBtn = () => {
    return (
        <div id='btn-settings'>
            <div id='circle'>UN</div>
            <p>Username</p>
            <img src={require('../../images/expand.png')}></img>
        </div>
    );
}

export default SettingsBtn;
