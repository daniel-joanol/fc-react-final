import React, { useState } from 'react';

const StudentDetails = () => {

    return (
    
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="formulario">
                    <div className="head">
                        <div id="foto"></div>
                        <div className="nombre">
                            <p id="nombre_head">Nombre Alumno</p>
                            <p id="local">Ávila | España</p>
                        </div>
                    </div>
        
                    <div>
                        <form id="main_form" action="candidato_database.html" method="post">
        
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Nombre y Apellidos</p> 
                                        <input className="box" type="text" required id="nombre_alumno" name="nombre" placeholder="Nombre Alumno" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Nº Teléfono</p>
                                        <input className="box" type="tel" required id="tel_alumno" name="tel_alumno" placeholder="+34 654 85 52 48" />
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">E-mail</p>
                                        <input className="box" type="email" required id="email_alumno" name="email_alumno" placeholder="pinguino@gmail.com" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">País</p>
                                        <select name="pais" id="pais" className="box">
                                            <option value="España">España</option>
                                            <option value="Brasil">Brasil</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">Ciudad</p>
                                        <select name="ciudad" id="ciudad" className="box">
                                            <option value="Avila">Ávila</option>
                                            <option value="Barcelona">Barcelona</option>
                                            <option value="Madrid">Madrid</option>
                                            <option value="Sevilla">Sevilla</option>
                                            <option value="Florianopolis" style={ {display: 'none'} }>Florianópolis</option>
                                            <option value="Porto Alegre" style={ {display: 'none'} }>Porto Alegre</option>
                                            <option value="Rio de Janeiro" style={ {display: 'none'} }>Rio de Janeiro</option>
                                            <option value="Sao Paulo" style={ {display: 'none'} }>São Paulo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Traslado</p>
                                        <select name="traslado" id="traslado" className="box">
                                            <option value="Sí">Sí</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">Presencialidad</p>
                                        <select name="presencialidad" id="presencialidad" className="box">
                                            <option value="local">Local</option>
                                            <option value="remoto">Remoto</option>
                                            <option value="indiferente">Indiferente</option>
                                        </select>
                                    </div>  
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Documento CV</p>
                                        <label for="file-upload" className="custom_file_upload">
                                            <spam className="boton--texto boton--subir">Subir Archivo</spam>
                                        </label>
                                        <input id="file-upload" type="file" accept=".pdf"/>
                                        <button type="button" id="custom-borrar" onclick="removeFile()"><spam class="boton--texto boton--borrar">Borrar</spam></button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Etiquetas</p>
                                        <input className="box" type="text" list="etiquetas-list" required id="etiquetas_alumno" name="etiquetas_alumno" placeholder="Escribe para buscar..." onchange="addTag()"/>
                                        <datalist id="etiquetas-list">
                                            <option value="Angular" />
                                            <option value="CSS - HTML" />
                                            <option value="Java" />
                                            <option value="JavaScript" />
                                            <option value="Python" />
                                            <option value="React" />
                                            <option value="Spring" />
                                            <option value="TypeScript" />
                                        </datalist>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <spam className="etiqueta" >Angular<spam class="close" onclick="deleteTag('Angular')"></spam></spam> 
                                        <spam className="etiqueta" >CSS - HTML<spam class="close" onclick="deleteTag('CSS - HTML')"></spam></spam>  
                                        <spam className="etiqueta" style={ {display: 'none'} }>Java<spam class="close" onclick="deleteTag('Java')"></spam></spam> 
                                        <spam className="etiqueta" style={ {display: 'none'} }>JavaScript<spam class="close" onclick="deleteTag('JavaScript')"></spam></spam> 
                                        <spam className="etiqueta" style={ {display: 'none'} }>Python<spam class="close" onclick="deleteTag('Python')"></spam></spam> 
                                        <spam className="etiqueta" style={ {display: 'none'} }>React<spam class="close" onclick="deleteTag('React')"></spam></spam> 
                                        <spam className="etiqueta" style={ {display: 'none'} }>Spring<spam class="close" onclick="deleteTag('Spring')"></spam></spam> 
                                        <spam className="etiqueta" style={ {display: 'none'} }>TypeScript<spam class="close" onclick="deleteTag('TypeScript')"></spam></spam> 
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> 
                </div>
            </div>
    );
}

export default StudentDetails;
