import React from 'react';

const SearchBox = () => {
    
    const search = () => {
        
    }

    return (
        <div className="search">
            <spam id="alumno_search">Alumno</spam> <input type="text" id="input_search" onKeyUp={ search } placeholder="Buscar por nombre, email o ciudad" />
        </div>
    );
}

export default SearchBox;
