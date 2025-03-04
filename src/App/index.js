import React from 'react';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { useTodos } from './useTodos';
import { ChangeAlert } from '../ChangeAlert';

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo,
    sincronizeTodos
  } = useTodos();
  
  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        // se mandan los props y en la render propr especificas que es lo que vas a 
        // a renderizar como ya sea componentes o funciones
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError/>}
        onLoading={() => <TodosLoading/>}
        onEmptyTodos={() => <EmptyTodos/>}
        onEmptySearchResults={
          (searchText) => <p>No hay resultados para {searchText}</p>
        }
        // render es lo principal donde se renderiza el componente 
        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
      {todo => (
        <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      )}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />
      <ChangeAlert
        sincronize={sincronizeTodos}
      />
    </React.Fragment>
  );
}

// function App() {

//   const [state,setState] = React.useState('estado Compartido');
  
//   // pasas directamente el estado en el componente que lo necesites sin tener que estar pasando el estado por props,
//   // componente por componente

//   return(
//     <React.Fragment>
//       <TodoHeader>
//         <TodoCounter/>
//         <TodoSearch/>
//       </TodoHeader>
//       <TodoList>
//         <TodoItem state={state}/>
//       </TodoList>
//     </React.Fragment>
//   )
// }
// function TodoHeader({children}) {
//   return(
//     <header>
      
//     </header>
//   );
// }
// function TodoList({children}) {
//   return(
//     <section className='TodoList-container'>
//       {children}
//     </section>
//   );
// }

// function TodoCounter() {
//   return(
//     <p>TodoCounter</p>
//   );
// }
// function TodoSearch() {
//   return(
//     <p>TodoSearch</p>
//   );
// }
// function TodoItem({state}) {
//   return(
//     <p>TodoItem {state}</p>
//   );
// }

export default App;
