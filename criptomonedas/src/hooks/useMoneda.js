import React, { Fragment, useState } from 'react';

const useMoneda = (label, stateIncial) => {

    //State del Custom hook
    const [state, actualizarState] = useState(stateIncial);

    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select >
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );
    //retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
}



export default useMoneda;