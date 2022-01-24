import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filters = ({getCandidatesFilter}) => {

    const [tags, setTags] = useState([]);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [transfer, setTransfer] = useState(null);
    const [remote, setRemote] = useState(false);
    const [local, setLocal] = useState(false);

    useEffect(() => {
        search()
    }, [country, city, transfer, remote, local, tags]);

    const search = () => {

        let filter = '';
        if (country){
            filter = filter + 'country=' + country + '&';
        }

        if (city){
            filter = filter + 'city=' + city + '&';
        }

        if (transfer !== null){
            filter = filter + 'transfer=' + transfer + '&';
        }

        if (remote !== remote){
            filter = filter + 'remote=' + remote + '&';
        }

        if (local !== local){
            filter = filter + 'local=' + local + '&';
        }

        if (tags.length !== 0){
            filter = filter + 'tags='
            tags.map((tag, index) => {
                
                if (index === 0){
                    filter = filter + tag
                } else {
                    filter = filter + ',' + tag
                }
                
            })
        }

        console.log('filter 1: ' + filter)
        
        getCandidatesFilter(filter);
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

                //Avoids duplicated tags
                if (tags.length > 0){
                    tags.map((tag) => {
                        if (tag !== filter){
                            setTags(tags => [...tags, filter])
                        }
                    })
                } else {
                    setTags(tags => [...tags, filter])
                }
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

                if (newTags.length === 0 ){
                    setTags([]);
                } else {
                    setTags([newTags]);
                }
                
            }
        }
        
    }

    const saveTransfer = (e) => {

        if (e.target.name === 'traslado-si'){
            if (transfer === true){
                console.log(transfer)
                setTransfer(null) 
                document.getElementById('traslado-no').checked = false
            }else {
                console.log(transfer)
                setTransfer(true)
                document.getElementById('traslado-no').checked = false;
            }
        } 
            
        if (e.target.name === 'traslado-no'){
            if (transfer === false){
                console.log(transfer)
                setTransfer(null)
                document.getElementById('traslado-si').checked = false;
            } else {
                console.log(transfer)
                setTransfer(false)
                document.getElementById('traslado-si').checked = false;
            }
        }
    }

    return (
        <div id='filters-container'>
            <h2 id='filter-title'>Filtros de búsqueda</h2>
                <div>
                    <p className="formulario_campo">Etiquetas</p>
                    <input className="box" type="text" list="etiquetas-list" id="etiquetas_alumno" name="etiquetas_alumno" placeholder="Escribe para buscar..." onChange={ addSingleTag }/>
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

                <div>
                    <span className="etiqueta" style={ {display: 'none'} }>Angular<span class="close" onClick= { () => deleteTag('Angular') }></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>CSS - HTML<span class="close" onClick={() => deleteTag('CSS - HTML')}></span></span>  
                    <span className="etiqueta" style={ {display: 'none'} }>Java<span class="close" onClick={() => deleteTag('Java')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>JavaScript<span class="close" onClick={() => deleteTag('JavaScript')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>Python<span class="close" onClick={() => deleteTag('Python')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>React<span class="close" onClick={() => deleteTag('React')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>Spring<span class="close" onClick={() => deleteTag('Spring')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>J-Unit<span class="close" onClick={() => deleteTag('J-Unit')}></span></span> 
                </div>

            <div>
                <p className="formulario_campo">País</p>
                <input className="box" type="text" id="country_alumno" name="country_alumno" placeholder="Escribe para buscar..." value={country} onChange={ (e) => setCountry(e.target.value) }/>   
            </div>

            <div>
                <p className="formulario_campo">Ciudad</p>
                <input className="box" type="text" id="city_alumno" name="city_alumno" placeholder="Escribe para buscar..." value={city} onChange={ (e) => setCity(e.target.value) }/>   
            </div>

            <div>
                <p className='formulario_campo'>Presencial / a distancia</p>

                    <input type="checkbox" id="presencial" name="presencial" />
                    <label for="presencial" className='input_check' onChange={ () => setLocal(!local)} >Presencial</label><br/>
                    <input type="checkbox" id="distancia" name="distancia" />
                    <label for="distancia" className='input_check' onChange={ () => setRemote(!remote)}>A distancia</label>
            </div>

            <div>
                <p className='formulario_campo'>Posibilidad Traslado</p>

                    <input type="checkbox" id="traslado-si" name="traslado-si" onClick={ saveTransfer }/>
                    <label for="traslado-si" className='input_check'>Sí</label><br/>
                    <input type="checkbox" id="traslado-no" name="traslado-no" onClick={ saveTransfer }/>
                    <label for="traslado-no" className='input_check'>No</label>
            </div>
        </div>

    );
}



Filters.propTypes = {
    getCandidatesFilter: PropTypes.func.isRequired
};


export default Filters;
