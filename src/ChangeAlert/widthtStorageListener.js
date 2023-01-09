import React from "react";

function whithStorageListener(ComponenteEnvuelto) {
  return function ComponenteEnvueltoConStorageListener(props) {
    // es un hoc una  funcion envuelta que devuelve un componente para saber si hubo cambios
    const [storageChange, setStorageChange] = React.useState(false);
    
    // se mandan las dos propiedades del hook una para mostrar y otra para actualizar el store del cambio
    
    // esta funcion el segundo parametro devuelve el cambio que hubo en el storage
    window.addEventListener('storage', (change) => {
        if(change.key ==='TODOS_V1') {
            console.log('Hubo cambios en todos_v1');
            setStorageChange(true);
        }
    });

    const toggleShow = () => {
        props.sincronize();
        setStorageChange(false);
    }

    return ( 
        <ComponenteEnvuelto 
            show={storageChange} 
            toggleShow={toggleShow}
        />
    );
  };
}

export { whithStorageListener };
