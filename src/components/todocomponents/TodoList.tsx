import { VFC } from 'react';
import { TodoItem } from './TodoItem';
import { Todo } from '../../types/api';

interface TodoListProps {
  //id: number;
  todos: Todo[];
  setTodos: Function;
  toggleTodoCompletion: (id: number) => void;
}

export const TodoList: VFC<TodoListProps> = ({
  //id,
  todos,
  setTodos,
  toggleTodoCompletion,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Todos</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index: number) => {
          return (
            <TodoItem
              //id={id}
              key={index}
              todo={todo}
              setTodos={setTodos}
              toggleTodoCompletion={toggleTodoCompletion}
            />
          );
        })}
      </tbody>
    </table>
  );
};
