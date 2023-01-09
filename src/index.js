import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';
ReactDOM.render(
  <App />,
  // <AppConSaludo nombre="Gerardo" />,
  document.getElementById('root')
);

// function App(props) {
//   return (
//     <h1>¡{props.saludo}, {props.name}!</h1>
//   ); 
// }

// function conSaludo(ComponenteEnvuelto){
//   return function ComponenteEnvueltoConSaludo(saludo){
//     return function ComponenteDeVerdad(props) {
//       return (
//         // el ultimo return de un Hight Order Component, tiene que ser un componente las demas son solo funciones
//         <React.Fragment>
//           <ComponenteEnvuelto {...props} saludo={saludo}/>
//           <p>Estamos acompañando al componente envuelto ComponenteEnvuelto</p>
//         </React.Fragment>
//       );
//     }
//   }
// }
  
  
  

// const AppConSaludo = conSaludo(App)('Buenas');


