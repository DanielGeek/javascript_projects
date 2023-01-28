import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

// es lo mismo pero ahorras escribir más código
// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
todoList.todos.forEach( crearTodoHtml );

const newTodo = new Todo('Aprender Js');
// todoList.nuevoTodo( newTodo );
todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

console.log( 'todos', todoList.todos );