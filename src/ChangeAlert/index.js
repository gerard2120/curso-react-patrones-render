import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';
// import { whithStorageListener } from './widthtStorageListener';

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show){
    return (
      // muestra que hubo cambios en otra pestaña posterior muestra el boton, para ocultar y sincronizar esos cambios
      <div className='ChangeAlert-bg'>
        <div className='ChangeAlert-container'>
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador </p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className='TodoForm-button TodoForm-button--add'
            onClick={toggleShow}
          >
            Si..!
          </button>
        </div>
      </div>
      
    );
  } else{
    return null;
  }
}

// const ChangeAlertWithStorageListener = whithStorageListener(ChangeAlert)

export { ChangeAlert };
