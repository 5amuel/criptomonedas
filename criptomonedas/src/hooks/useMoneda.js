import React, { Fragment, useState } from 'react';

const useMoneda = () => {

    //State del Custom hook
    const [state, actualizarState] = useState('');

    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select >
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    );
    //retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState];
}



export default useMoneda;