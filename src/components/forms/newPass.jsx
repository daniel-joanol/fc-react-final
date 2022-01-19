import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

import { newPass } from '../../services/axiosService'

const Newpass = () => {

    const navigate = useNavigate();

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                .email('Invalid email format')
                .required('Enter your email'),
            password: Yup.string()
                .required('Enter your new password'),
            confirmPassword: Yup.string()
                .required('Confirm the password')
        }
    );

    const initialCredentials = {
        email: '',
        password: '',
        confirmPassword: ''
    }

    const newPassword = (values) => {
        newPass(values.email, values.password)
            .then((response) => {
                console.log(response)
                console.log('Password changed with success')
                alert('Password changed with success')
                setTimeout(navigate('/login'), 3000)
            })
            .catch((error) => {
                console.log(error)
                alert(error)
            })
    }

    return (
        <div class='d-flex justify-content-center' style={{minWidth: '50%', paddingTop: '50px'}}>
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    if (values.password === values.confirmPassword){
                        newPassword(values)
                    } else {
                        alert('You must repeat the password')
                    }
                    
                }}
            >
                {({
                    touched,
                    errors,
                    handleChange,
                    handleBlur }) => (
                        
                        <div class='d-flex flex-column' class='pass-form'>

                            <Form>
                                <div>
                                    <h2>Create a new password</h2>
                                </div>

                                <div>
                                    <label htmlFor='email' className='nombre_campo'>Email</label>
                                </div>

                                <div>    
                                    <Field id='email' className='box-login-page' type='email' name='email' placeholder='Introduce tu correo' />
                                        {
                                            errors.email && touched.email &&
                                            (
                                                <ErrorMessage name='email' component='div'/>
                                            )
                                        }
                                </div>

                                <div>
                                    <label htmlFor='password' className='nombre_campo'>Contraseña</label>
                                </div>
                                <div>    
                                    <Field id='password' className='box-login-page' name='password' type='password' placeholder='Introduce tu contraseña'/>
                                
                                    {
                                        (
                                            <ErrorMessage name='password' component='div'/>
                                        )
                                    }
                                
                                </div>

                                <div>
                                    <label htmlFor='confirmPassword' className='nombre_campo'>Confirme la contraseña</label>
                                </div>
                                <div>    
                                    <Field id='confirmPassword' className='box-login-page' name='confirmPassword' type='password' placeholder='Repite tu contraseña'/>
                                
                                    {
                                        (
                                            <ErrorMessage name='password' component='div'/>
                                        )
                                    }
                                
                                </div>

                                <div>
                                    <p></p>
                                    <input className="button" type="submit" value="Enviar" />
                                </div>

                            </Form>

                        </div>
                        
                    )}

            </Formik>
        </div>
    );
}

export default Newpass;
