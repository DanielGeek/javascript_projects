import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// const tarea = new Todo('Aprender Javascript');
// todoList.nuevoTodo( tarea );

// console.log(todoList);
// crearTodoHtml( tarea );

localStorage.setItem('my-key', 'ABC123');
sessionStorage.setItem('my-key', 'ABC123');

// setTimeout(() => {

//   localStorage.removeItem('my-key');

// }, 1500);