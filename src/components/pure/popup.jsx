import React from 'react';

const Popup = props => {

    return (
        <div className="popup-box">
            <div className="box-popup-element">
            <div style={{padding: '20px'}}>
                <header>
                    <h2>Nuevo Alumno</h2>
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                </header>
                <body>
                <form id="form-popup" action="form-popup.html" method="post">
                    <div className='row' style={{backgroundColor:'#FFF'}}>
                        <div className='col-6'>
                            
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="formulario_campo">Nombre y Apellidos</p> 
                                    <input className="box" type="text" required id="nombre_alumno" name="nombre" placeholder="Ej: Jose Mallorca" />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">País</p>
                                    <select name="pais" id="pais" className="box" onchange="citiesList()">
                                        <option value="España">España</option>
                                        <option value="Brasil">Brasil</option>
                                    </select>
                                </div>
                                <div className='col-6'>
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

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">Nº Teléfono</p>
                                    <input className="box" type="tel" required id="tel_alumno" name="tel_alumno" placeholder="+34 654 85 52 48" />
                                </div>
                                <div className='col-6'>
                                    <p className="formulario_campo">E-mail</p>
                                    <input className="box" type="email" required id="email_alumno" name="email_alumno" placeholder="pinguino@gmail.com" />
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">Presencialidad</p>
                                    <select name="presencialidad" id="presencialidad" className="box">
                                        <option value="local">Local</option>
                                        <option value="remoto">Remoto</option>
                                        <option value="indiferente">Indiferente</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <p className="formulario_campo">Traslado</p>
                                    <select name="traslado" id="traslado" className="box">
                                        <option value="Sí">Sí</option>
                                        <option value="No">No</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <div className='col-6'>
                            
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="formulario_campo">Foto de perfil</p>
                                </div>
                                <div className='row'>
                                    <div className='col-4'>
                                        <label for="file-upload1" className="custom_file_upload">
                                            <spam className="boton--texto boton--subir">Subir Imagen</spam>
                                        </label>
                                        <input id="file-upload1" type="file" accept="image/png, image/jpeg, image/jpg"/>
                                    </div>
                                    <div className='col-8'>
                                        <p className='p-popup'>Archivos soportados: <b>png, jpg y jpeg</b></p>
                                        <p className='p-popup'>Tamaño de archivo máximo: <b>2 MB</b></p>
                                    </div> 
                                </div>    
                            </div>  

                            <div className='row'>
                                <div className='col-12'>
                                    <p className="formulario_campo">Documento CV</p>
                                </div>

                                <div className='row'>
                                    <div className='col-5'>
                                        <label for="file-upload2" className="custom_file_upload custom_file_upload2">
                                            <spam className="boton--texto boton--subir">Subir Documento PDF</spam>
                                        </label>
                                        <input id="file-upload2" type="file" accept=".pdf"/>
                                    </div>
                                    <div className='col-7'>
                                        <p className='p-popup'>Archivos soportador: <b>.pdf</b></p>
                                        <p className='p-popup'>Tamaño de archivo máximo: <b>20 MB</b></p>
                                    </div>

                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                <p className="formulario_campo">Etiquetas</p>
                                    <input className="box" type="text" list="etiquetas-list2" required id="etiquetas_alumno" name="etiquetas_alumno" placeholder="Escribe para buscar..." onchange="addTag()"/>
                                    <datalist id="etiquetas-list2">
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

                        </div>
                    </div>
                </form>    
                </body>

                        
            </div>
            <footer>
                    <div id='popup-footer' className='d-flex flex-row-reverse'>
                        <button id='cancel-btn' className='popup-btn'>Cancelar</button> 
                        <button id='save-btn' className='popup-btn'>Guardar</button>
                    </div>
                </footer>
      </div>
    </div>
    );
}

export default Popup;
