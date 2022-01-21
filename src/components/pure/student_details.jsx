import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Student } from '../../models/student.class.js'
import { getCandidateById, updateCandidate } from '../../services/axiosService.js'

const StudentDetails = ({id, token}) => {

    const [fullname, setFullname] = useState(null);
    const [phone, setPhone] = useState(null);
    const [email, setEmail] = useState(null);
    const [country, setCountry] = useState(null);
    const [city, setCity] = useState(null);
    const [remote, setRemote] = useState(null);
    const [local, setLocal] = useState(null);
    const [transfer, setTransfer] = useState(null);
    const [presencialidad, setPresencialidad] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [curriculum, setCurriculum] = useState(null);
    const [tags, setTags] = useState([]);

    //When using the useStates local, transfer and remote the values sended to the api
    // were wrong
    var remote2;
    var local2;
    var transfer2;
    var city2;
    var tags2;

    useEffect(() => {
      getCandidate()
      changeCities()
    }, [getCandidate]);

    const getCandidate = useCallback(() => {
        getCandidateById(id, token)
            .then((response) =>{

                setFullname(response.data.fullname)
                setPhone(response.data.phone)
                setEmail(response.data.email)
                setCountry(response.data.country)
                setCity(response.data.city)
                setLocal(response.data.local)
                setRemote(response.data.remote)
                setTransfer(response.data.transfer)
                setPhoto(response.data.photoUrl)
                setCurriculum(response.data.curriculumUrl)
                setTags(response.data.tags)
                showTags(response.data.tags)                

                if (local && remote){
                    setPresencialidad("Indiferente")
                } else if (local && !remote){
                    setPresencialidad("Local")
                } else {
                    setPresencialidad("Remoto")
                }
            })
            .catch((error) => {
                console.log(`Error: ${error}`)
            })
    }, [id, token])

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

    const updateLocalValues = (e) => {
        const id = e.target.id;
        id === 'nombre_alumno' ? setFullname(e.target.value) : setFullname(fullname);
        id === 'tel_alumno' ? setPhone(e.target.value) : setPhone(phone);
        id === 'email_alumno' ? setEmail(e.target.value) : setEmail(email);

        if (id === 'ciudad'){
            setCity(e.target.value);
            city2 = e.target.value;
        } else {
            setCity(city);
            city2 = city;
        }

        if (id === 'traslado'){
            if (e.target.value === 'Sí'){
                setTransfer(true);
                transfer2 = true;
            } else {
                setTransfer(false);
                transfer2 = false;
            }
        } else {
            setTransfer(transfer);
            transfer2 = transfer;
        }

        if (id === 'presencialidad'){
            if (e.target.value === 'Local'){
                setLocal(true);
                local2 = true;
                setRemote(false);
                remote2 = false;
                setPresencialidad('Local');
            } else if (e.target.value === 'Remoto'){
                setLocal(false);
                local2 = false;
                setRemote(true);
                remote2 = true;
                setPresencialidad('Remoto');
            } else {
                setLocal(true);
                local2 = true;
                setRemote(true);
                remote2 = true;
                setPresencialidad('Indiferente');
            }
        } else {
            setRemote(remote);
            setLocal(local);
            setPresencialidad(presencialidad);
            remote2 = remote;
            local2 = local;
        }

        updateOnDb();
        
    }

    const updateOnDb = () => {

        let objTags = []
        tags.map((tag) => { objTags.push({name: tag})})

        const updatedStudent = new Student(fullname, city2, country, phone, email, objTags, remote2, local2, transfer2)

        updateCandidate(updatedStudent, id, token)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const showTags = ( tagsActuales ) => {

        var etiquetas, filter, i, nombreEtiqueta;
        etiquetas = document.getElementsByClassName("etiqueta");

        tagsActuales.map((tag) => {
            filter = tag;
            for (i = 0; i < etiquetas.length; i++){
                nombreEtiqueta = etiquetas.item(i).innerHTML.split("<")[0];
                if ( filter == nombreEtiqueta) {
                    etiquetas.item(i).style.display = "";
                }
            }
        })
        
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
            }
        }

    }

    const deleteTag = (tag) => {
        var etiquetas, i, nombreEtiqueta;
        etiquetas = document.getElementsByClassName("etiqueta");

        for (i = 0; i < etiquetas.length; i++){
            nombreEtiqueta = etiquetas.item(i).innerHTML.split("<")[0];
            if ( tag == nombreEtiqueta) {
                etiquetas.item(i).style.display = "none";
            }
        }
    }

    const removeFile = () => {
        document.getElementById("file-upload").value = "";
    }

    return (
        <div class="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="formulario">
                    <div className="head">
                        <div id="foto" style={ photo && { backgroundImage: `url(${photo})`}}></div>
                        <div className="nombre">
                            <p id="nombre_head">{ fullname }</p>
                            <p id="local">{ city } | {country}</p>
                        </div>
                    </div>
        
                    <div>
                        <form id="main_form" action="candidato_database.html" method="post">
        
                            <div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Nombre y Apellidos</p> 
                                        <input className="box" type="text" required id="nombre_alumno" name="nombre" placeholder={fullname} onKeyUp={ updateLocalValues }/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Nº Teléfono</p>
                                        <input className="box" type="tel" required id="tel_alumno" name="tel_alumno" placeholder={phone} onKeyUp={ updateLocalValues }/>
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">E-mail</p>
                                        <input className="box" type="email" required id="email_alumno" name="email_alumno" placeholder={email} onKeyUp={ updateLocalValues }/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">País</p>
                                        <select name="pais" id="pais" className="box" value={ country } onChange={ changeCities }>
                                            <option value="España">España</option>
                                            <option value="Brasil">Brasil</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">Ciudad</p>
                                        <select name="ciudad" id="ciudad" className="box" value={city} onChange={ updateLocalValues }>
                                            <option value="Ávila">Ávila</option>
                                            <option value="Barcelona">Barcelona</option>
                                            <option value="Madrid">Madrid</option>
                                            <option value="Sevilla">Sevilla</option>
                                            <option value="Florianópolis">Florianópolis</option>
                                            <option value="Porto Alegre">Porto Alegre</option>
                                            <option value="Rio de Janeiro">Rio de Janeiro</option>
                                            <option value="São Paulo">São Paulo</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Traslado</p>
                                        <select name="traslado" id="traslado" className="box" value={transfer ? "Sí" : "No"} onChange={ updateLocalValues }>
                                            <option value="Sí">Sí</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <p className="formulario_campo">Presencialidad</p>
                                        <select name="presencialidad" id="presencialidad" className="box" value={presencialidad} onChange={ updateLocalValues }>
                                            <option value="Local">Local</option>
                                            <option value="Remoto">Remoto</option>
                                            <option value="Indiferente">Indiferente</option>
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
                                        <button type="button" id="custom-borrar" onclick={removeFile}><span class="boton--texto boton--borrar">Borrar</span></button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="formulario_campo">Etiquetas</p>
                                        <input className="box" type="text" list="etiquetas-list" required id="etiquetas_alumno" name="etiquetas_alumno" placeholder="Escribe para buscar..." onChange={ addSingleTag }/>
                                        <datalist id="etiquetas-list">
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
                                <div className="row">
                                    <div className="col">
                                        <span className="etiqueta" style={ {display: 'none'} }>Angular<span class="close" onClick= {() => deleteTag('Angular')}></span></span> 
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
                        </form>
                    </div> 
                </div>
            </div>

            <div className="col-lg-8 col-md-6 col-sm-12">
                <iframe src={curriculum} width="100%" height="100%" id="pdf" style={{backgroundColor: 'black'}}></iframe>
            </div>
        </div>    
    );
}

export default StudentDetails;


StudentDetails.propTypes = {
    id: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired
};