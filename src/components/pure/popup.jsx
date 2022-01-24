import React, { useState } from 'react';
import { AuthContext } from '../../AppRouting';
import { createCandidate, addPhoto } from '../../services/axiosService';
import { Student } from '../../models/student.class';

const Popup = ( props ) => {

    const { state: authState } = React.useContext(AuthContext);

    const [fullname, setFullname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [country, setCountry] = useState('España');
    const [city, setCity] = useState('Ávila');
    const [photo, setPhoto] = useState(null);
    const [curriculum, setCurriculum] = useState(null);
    const [tags, setTags] = useState([]);
    const [remote, setRemote] = useState(true);
    const [local, setLocal] = useState(false);
    const [transfer, setTransfer] = useState(false);
    const [presencialidad, setPresencialidad] = useState('Remoto');

    const saveCandidate = () => {

        let objTags = []
        tags.map((tag) => { objTags.push({name: tag})})

        const newCandidate = new Student(1, fullname, city, country, phone, email, objTags, remote, local, transfer)
        createCandidate(newCandidate, authState.token)
            .then((response) => {
                console.log(response)
                //let id = response.data.id
            
                uploadPhoto()
                /* let photoFile = document.querySelector('file-upload1')
                console.log(photoFile)

                 if (photoFile !== null && photoFile !== ''){
                    console.log('Got here')
                    addPhoto(id, photoFile[0], authState.token)
                        .then((response) => {
                            console.log(response)
                        })
                        .catch((error) => {
                            console.log(error)
                        })
 
                } */

                //window.location.reload(false);

            })
            .catch((error) => {
                console.log(error)
                
                if (fullname === null || phone === null || email === null){
                    alert('Nombre y Apellidos, Email y Nº Teléfono son campos obligatorios')
                }
            })

        
    }

    const saveFullname = (e) => {
        setFullname(e.target.value);
    }

    const savePhone = (e) => {
        setPhone(e.target.value);
    }

    const saveEmail = (e) => {
        setEmail(e.target.value);
    }

    const saveCity = (e) => {
        setCity(e.target.value);
    }

    const saveTransfer = (e) => {
        if (e.target.value === 'Sí'){
            setTransfer(true);
        } else {
            setTransfer(false);
        }
    }

    const savePresencialidad = (e) => {
        
        switch (e.target.value) {
            case 'Local':
                setLocal(true);
                setRemote(false);
                setPresencialidad('Local');
                break;
        
            case 'Remoto':
                setLocal(false);
                setRemote(true);    
                setPresencialidad('Remoto');
            case 'Indiferente':
                setLocal(true);
                setRemote(true);
                setPresencialidad('Indiferente');
            default:
                break;
        }
    }

    const changeCities = () => {
        let filter, pais, ciudad, ciudadActual, nCiudades, i;
        pais = document.getElementById("pais");
        ciudad = document.getElementById("ciudad");
        ciudadActual = ciudad.getElementsByTagName("option");
        filter = pais.value.toUpperCase();
        nCiudades = 4;
    
        if (filter == "España".toUpperCase()){
            for (i = 0; i < nCiudades; i++) {
                ciudadActual[i].style.display = "";
                ciudadActual[i+4].style.display = "none";
            }
        }

        if (filter == "Brasil".toUpperCase()){
            for (i = 0; i < nCiudades; i++) {
                ciudadActual[i].style.display = "none";
                ciudadActual[i+4].style.display = "";
            }
        }

        setCountry(document.getElementById("pais").value)
    }

    const addSingleTag = () => {
        var etiquetas, filter, i, etiquetaActual, nombreEtiqueta;
        etiquetas = document.getElementsByClassName("etiqueta");
        etiquetaActual = document.getElementById("etiquetas_alumno");
        filter = etiquetaActual.value;

        for (i = 0; i < etiquetas.length; i++){
            nombreEtiqueta = etiquetas.item(i).innerHTML.split("<")[0];
            if ( filter == nombreEtiqueta) {
                etiquetas.item(i).style.display = "";
                etiquetaActual.value = "";
                setTags(tags => [...tags, filter])
            }
        }

    }

    const deleteTag = (tag) => {
        var etiquetas, i, nombreEtiqueta, newTags, index;
        newTags = tags
        etiquetas = document.getElementsByClassName("etiqueta");

        for (i = 0; i < etiquetas.length; i++){
            nombreEtiqueta = etiquetas.item(i).innerHTML.split("<")[0];
            if ( tag == nombreEtiqueta) {
                etiquetas.item(i).style.display = "none";
                index = newTags.findIndex((x) => x === tag);
                newTags.splice(index, 1);
            }
        }
    }

    const uploadPhoto = async () => {
        const file = await readPhoto();

        console.log(file)
        console.log(file.name)

        await addPhoto(file, authState.token)
        .then((response) => {
            console.log(response)
            console.log(response.data)
            setCurriculum(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    function readPhoto() {
        return new Promise(resolve => {
            var fileInput = document.querySelector('#file-upload1');
            var files = fileInput.files;
            /* var i = 0;
            while ( i < files.length) {
                var file = files[i];
                i++;
            } */
            resolve(files[0]);
        });
    }
 
    return (
        <div className="popup-box">
            <div className="box-popup-element">
            <div style={{padding: '20px'}}>
                <header>
                    <h2>Nuevo Alumno</h2>
                </header>
                <body>
                <form id="form-popup" action="form-popup.html" method="post">
                    <div className='row' style={{backgroundColor:'#FFF'}}>
                        <div className='col-6'>
                            
                            <div className='row'>
                                <div className='col-12'>
                                    <p className="formulario_campo">Nombre y Apellidos</p> 
                                    <input className="box" type="text" required id="nombre_alumno" name="nombre" placeholder="Ej: Jose Mallorca" onKeyUp={ saveFullname }/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">País</p>
                                    <select name="pais" id="pais" className="box" value={ country } onChange={ changeCities }>
                                        <option value="España">España</option>
                                        <option value="Brasil">Brasil</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <p className="formulario_campo">Ciudad</p>
                                    <select name="ciudad" id="ciudad" className="box" value={ city } onChange={ saveCity }>
                                        <option value="Ávila">Ávila</option>
                                        <option value="Barcelona">Barcelona</option>
                                        <option value="Madrid">Madrid</option>
                                        <option value="Sevilla">Sevilla</option>
                                        <option value="Florianópolis" style={ {display: 'none'} }>Florianópolis</option>
                                        <option value="Porto Alegre" style={ {display: 'none'} }>Porto Alegre</option>
                                        <option value="Rio de Janeiro" style={ {display: 'none'} }>Rio de Janeiro</option>
                                        <option value="São Paulo" style={ {display: 'none'} }>São Paulo</option>
                                    </select>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">Nº Teléfono</p>
                                    <input className="box" type="tel" required id="tel_alumno" name="tel_alumno" placeholder="+34 654 85 52 48" onKeyUp={ savePhone }/>
                                </div>
                                <div className='col-6'>
                                    <p className="formulario_campo">E-mail</p>
                                    <input className="box" type="email" required id="email_alumno" name="email_alumno" placeholder="pinguino@gmail.com" onKeyUp={ saveEmail }/>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-6'>
                                    <p className="formulario_campo">Presencialidad</p>
                                    <select name="presencialidad" id="presencialidad" className="box" value={ presencialidad } onChange={ savePresencialidad }>
                                        <option value="Local">Local</option>
                                        <option value="Remoto">Remoto</option>
                                        <option value="Indiferente">Indiferente</option>
                                    </select>
                                </div>
                                <div className='col-6'>
                                    <p className="formulario_campo">Traslado</p>
                                    <select name="traslado" id="traslado" className="box" value={transfer ? "Sí" : "No"} onChange={ saveTransfer }>
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
                                            <span className="boton--texto boton--subir">Subir Imagen</span>
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
                                            <span className="boton--texto boton--subir">Subir Documento PDF</span>
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
                                    <input className="box" type="text" list="etiquetas-list2" required id="etiquetas_alumno" name="etiquetas_alumno" placeholder="Escribe para buscar..." onChange={ addSingleTag }/>
                                    <datalist id="etiquetas-list2">
                                        <option value="Angular" />
                                        <option value="CSS - HTML" />
                                        <option value="Java" />
                                        <option value="JavaScript" />
                                        <option value="Python" />
                                        <option value="React" />
                                        <option value="Spring" />
                                        <option value="J-Unit" />
                                    </datalist>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12'>
                                    <span className="etiqueta" style={ {display: 'none'} }>Angular<span class="close" onClick= { () => deleteTag('Angular') }></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>CSS - HTML<span class="close" onClick={() => deleteTag('CSS - HTML')}></span></span>  
                                    <span className="etiqueta" style={ {display: 'none'} }>Java<span class="close" onClick={() => deleteTag('Java')}></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>JavaScript<span class="close" onClick={() => deleteTag('JavaScript')}></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>Python<span class="close" onClick={() => deleteTag('Python')}></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>React<span class="close" onClick={() => deleteTag('React')}></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>Spring<span class="close" onClick={() => deleteTag('Spring')}></span></span> 
                                    <span className="etiqueta" style={ {display: 'none'} }>J-Unit<span class="close" onClick={() => deleteTag('J-Unit')}></span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>    
                </body>

                        
            </div>
            <footer>
                    <div id='popup-footer' className='d-flex flex-row-reverse'>
                        <button id='cancel-btn' className='popup-btn' onClick={props.handleClose}>Cancelar</button> 
                        <button id='save-btn' className='popup-btn' onClick={ saveCandidate }>Guardar</button>
                    </div>
                </footer>
      </div>
    </div>
    );
}

export default Popup;
