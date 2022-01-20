import React, { useState, useEffect } from 'react';

import { AuthContext } from '../../AppRouting'
import { getNameUser } from '../../services/axiosService'
import { useNavigate} from 'react-router-dom';


const SettingsBtn = () => {

    const { dispatch } = React.useContext(AuthContext);
    const { state: authState } = React.useContext(AuthContext);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        getName()
    }, [])

    const logout = () => {
        dispatch({ type: "LOGOUT", })
        navigate('/login')
    } 

    const getName = () => {
        getNameUser(authState.token)
            .then((response) => {
                console.log(response.data.message)
                setName(response.data.message)
                })
            .catch((error) => {
                console.log(`Error: ${error}`)
                logout()
            })    

    }

    return (
        <div id='btn-settings'>
            <div id='circle'>{ name.charAt(0) + name.charAt(1) }</div>
            <p>{ name }</p>
            <img src={require('../../images/expand.png')} onClick={ () => logout() }></img>
        </div>
    );
}

export default SettingsBtn;
