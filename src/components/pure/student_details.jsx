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
                                            <span className="boton--texto boton--subir">Subir Archivo</span>
                                        </label>
                                        <input id="file-upload" type="file" accept=".pdf"/>
                                        <button type="button" id="custom-borrar" onclick="removeFile()"><span class="boton--texto boton--borrar">Borrar</span></button>
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
                                        <span className="etiqueta" >Angular<span class="close" onclick="deleteTag('Angular')"></span></span> 
                                        <span className="etiqueta" >CSS - HTML<span class="close" onclick="deleteTag('CSS - HTML')"></span></span>  
                                        <span className="etiqueta" style={ {display: 'none'} }>Java<span class="close" onclick="deleteTag('Java')"></span></span> 
                                        <span className="etiqueta" style={ {display: 'none'} }>JavaScript<span class="close" onclick="deleteTag('JavaScript')"></span></span> 
                                        <span className="etiqueta" style={ {display: 'none'} }>Python<span class="close" onclick="deleteTag('Python')"></span></span> 
                                        <span className="etiqueta" style={ {display: 'none'} }>React<span class="close" onclick="deleteTag('React')"></span></span> 
                                        <span className="etiqueta" style={ {display: 'none'} }>Spring<span class="close" onclick="deleteTag('Spring')"></span></span> 
                                        <span className="etiqueta" style={ {display: 'none'} }>TypeScript<span class="close" onclick="deleteTag('TypeScript')"></span></span> 
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
