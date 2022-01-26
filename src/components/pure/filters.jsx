import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Filters = ({getCandidatesFilter}) => {

    const [tags, setTags] = useState([]);
    const [country, setCountry] = useState('null');
    const [city, setCity] = useState('null');
    const [transfer, setTransfer] = useState(null);
    const [remote, setRemote] = useState(null);
    const [local, setLocal] = useState(null);

    useEffect(() => {
        search()
        changeCities()
    }, [country, city, transfer, remote, local, tags]);

    const search = () => {

        let filter = '';
        if (country !== "null"){
            filter = filter + 'country=' + country + '&';
        }

        if (city !== 'null'){
            filter = filter + 'city=' + city + '&';
        }

        if (transfer !== null){
            filter = filter + 'transfer=' + transfer + '&';
        }

        if (remote !== null){
            filter = filter + 'remote=' + remote + '&';
        }

        if (local !== null){
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

                if (tags.length === 0){
                    setTags(tags => [...tags, filter])
                } else {
                    tags.map((tag) => {
                        if (tag !== filter){
                            setTags(tags => [...tags, filter])
                        }
                    })

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

    const changeCities = () => {
        let filter, pais, ciudad, ciudadActual, nCiudades, i;
        pais = document.getElementById("pais");
        ciudad = document.getElementById("ciudad");
        ciudadActual = ciudad.getElementsByTagName("option");
        filter = pais.value.toUpperCase();
        nCiudades = 4;

        if (filter == "null".toUpperCase()){
            for (i = 0; i < 8; i++){
                ciudadActual[i].style.display = "none";
                setCity("null");
            }
        }
    
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

    const saveLocal = () => {
        if (local === true){
            setLocal(null)
        } else {
            setLocal(true)
        }
    }

    const saveRemote = () => {
        if (remote === true){
            setRemote(null)
        } else {
            setRemote(true)
        }
    }

    return (
        <div id='filters-container'>
            <div className='row'>
                <div className='col-10'>
                    <h2 id='filter-title'>Filtros de búsqueda</h2>
                </div>
                <div className='col-2'>
                    <img src={require('../../images/trash.png')} style={{width: "20px", cursor: "pointer"}} onClick={() => getCandidatesFilter('')}></img>
                </div>
            </div>
                <div className='top-margin'>
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

                <div className='top-margin'>
                    <span className="etiqueta" style={ {display: 'none'} }>Angular<span class="close" onClick= { () => deleteTag('Angular') }></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>CSS - HTML<span class="close" onClick={() => deleteTag('CSS - HTML')}></span></span>  
                    <span className="etiqueta" style={ {display: 'none'} }>Java<span class="close" onClick={() => deleteTag('Java')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>JavaScript<span class="close" onClick={() => deleteTag('JavaScript')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>Python<span class="close" onClick={() => deleteTag('Python')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>React<span class="close" onClick={() => deleteTag('React')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>Spring<span class="close" onClick={() => deleteTag('Spring')}></span></span> 
                    <span className="etiqueta" style={ {display: 'none'} }>J-Unit<span class="close" onClick={() => deleteTag('J-Unit')}></span></span> 
                </div>

            <div className='top-margin'>
                <p className="formulario_campo">País</p>
                <select name="pais" id="pais" className="box" value={ country } onChange={ changeCities }>
                    <option value="null"> </option>
                    <option value="España">España</option>
                    <option value="Brasil">Brasil</option>
                </select>   
            </div>

            <div className='top-margin'>
                <p className="formulario_campo">Ciudad</p>
                    <select name="ciudad" id="ciudad" className="box" value={city} onChange={ (e) => setCity(e.target.value) }>
                        <option value="Ávila">Ávila</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Florianópolis">Florianópolis</option>
                        <option value="Porto Alegre">Porto Alegre</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="null"> </option>
                    </select>
            </div>

            <div className='top-margin'>
                <p className='formulario_campo'>Presencial / a distancia</p>

                    <input type="checkbox" id="presencial" name="presencial" onClick={ saveLocal }/>
                    <label for="presencial" className='input_check'>Presencial</label><br/>
                    <input type="checkbox" id="distancia" name="distancia" onClick={  saveRemote }/>
                    <label for="distancia" className='input_check'>A distancia</label>
            </div>

            <div className='top-margin'>
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
