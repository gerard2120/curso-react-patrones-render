import React from "react";
function TodoHeader({ children, loading }) {
  // se  crea un elemento clonado del con las propiedades que mandamos del objeto children, mas la propiedad loading
  // con la propiedad children renderiza todos loc componentes que pasamos de un componenete a  otro
  // es decir componentes hijos permite uno o mas componentes a la vez
  return (
    <header>
      {
        React.Children
          .toArray(children)
          .map(child => React.cloneElement(child, { loading }))
      }
    </header>
  );
}

export { TodoHeader };
