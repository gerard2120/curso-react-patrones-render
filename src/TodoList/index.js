import React from 'react';
import './TodoList.css'

function TodoList(props) {
  return (
    <section className='TodoList-container'>
      <ul>
        {props.error && props.onError()}
        {props.loading && props.onLoading()}
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}
        
        {/* dos formas derentes de renderizar el todo que estamos iterando una mandando la funcion y otra la propiedad
        ya que esta iterando de las dos maneras las propiedades
        {props.searchedTodos.map(todo => props.render(todo))} */}
        {props.searchedTodos.map(props.render)}
      </ul>
    </section>
  );
}

export { TodoList };
