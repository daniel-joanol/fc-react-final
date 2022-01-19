import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';

import { forgotPass } from '../../services/axiosService';

const Forgotpass = () => {

    const navigate = useNavigate();

    const loginSchema = Yup.object().shape(
        {
            email: Yup.string()
                    .email('Invalid email format')
                    .required()
        }
    );
    
    const initialCredentials = {
        email: ''
    }
        
    const forgotPassword = (values) => {
        forgotPass(values.email)
            .then((response) => {
                console.log(response)
                console.log('Check your email account')
                alert('Check your email account')
                setTimeout(navigate('/login'), 6000)
            })
            .catch((error) => {
                console.log(error)
                alert('This email is not registered')
            })
    }

    return (
            <Formik
                initialValues = { initialCredentials }
                validationSchema = { loginSchema }
                onSubmit={async (values) => {
                    forgotPassword(values)
                }}
            >

                {({
                    touched,
                    errors,
                    handleChange,
                    handleBlur }) => (
                        <div id='forgot_pass-form'>
                            <Form>
                                <div>
                                    <h1>Forgot your password?</h1>
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
                                    <p></p>
                                    <input className="button" type="submit" value="Enviar" />
                                </div>
                            </Form>
                        </div>
            )} </Formik>
    );
}

export default Forgotpass;
