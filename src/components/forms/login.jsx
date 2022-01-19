import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import Foot from '../pure/foot_login';

import { AuthContext } from '../../AppRouting.js';
import { login } from '../../services/axiosService';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required(),
        password: Yup.string()
                .required(),
        check: Yup.bool()
    }
);

const Login = () => {

    const { dispatch } = React.useContext(AuthContext);
    const { state: authState } = React.useContext(AuthContext);
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    }

    const [initialEmail, setInitialEmail] = useState('');

    useEffect(() => {
        document.body.style.backgroundColor='#FFF';
        document.getElementById('email').value = initialEmail;
        document.getElementById('password').value = '';
        document.getElementById("check").defaultChecked = false;
        if (authState.isAuthenticated) {
            navigateTo('/dashboard');
        }
    }, )

    const initialCredentials = {
        email: '',
        password: '',
        check: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialCredentials);

    const authUser = (values) => {
        setData({
            ...data,
            errorMessage: null
        });
        login(values.email, values.password)
            .then((response) => {
                dispatch({
                    type: "LOGIN",
                    payload: response
                });
                console.log('Login realized with success!')
            })
            .catch((error) => {
                setData({
                    ...data,
                    errorMessage: 'Bad credentials!'
                  });
            })
    }

    return (
        <div className='col left'>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    if (values.check == true){
                        setInitialEmail(values.email)
                    } else {
                        setInitialEmail('')
                    }
                    authUser(values)
                }}
            >

            {({
                touched,
                errors,
                handleChange,
                handleBlur }) =>(
                    <div id='main_form-login-page'>
                    <Form>
                        <div>
                            <p>OpenBootcamp<spam className="font_green bold"> | Alumnos</spam></p>
                        </div>
                        
                        <div>
                            <label htmlFor='email' className='nombre_campo'>Email</label>
                            <Field id='email' className='box-login-page' type='email' name='email' placeholder='Introduce tu correo' />

                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name='email' component='div'/>
                                )
                            }
                        </div>
                        
                        <div>
                            <label htmlFor='password' className='nombre_campo'>Password</label>
                            <Field id='password' className='box-login-page' name='password' type='password' placeholder='Introduce tu contraseña'/>
                        
                            {
                                (
                                    <ErrorMessage name='password' component='div'/>
                                )
                            }
                        
                        </div>

                        <div>
                            <p></p>
                            <input className="button" type="submit" value="Enviar" />
                            {
                                data.errorMessage && <p class='errorMessage'>{data.errorMessage}</p>
                            }
                        </div>
                        
                        <div className="container2">
                            <div className="row">
                                <div className="col recuerdame">
                                    <Field type="checkbox" name='check' id='check' /><label for="check">Recuerdame</label>
                                </div>
                                <div className="col olvidado"> 
                                    <p className="font_green"><Link to={'/forgot'}>He olvidado la contraseña</Link></p>
                                </div>
                        </div>
                    </div>
                    </Form>
                    <Foot />
                    </div>
                    
                    
                )}

            </Formik>
        </div>
    )
}

export default Login;
