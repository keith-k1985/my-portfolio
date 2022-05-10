import { useState, VFC } from 'react';
import { deleteTodo, completedTodo } from '../../types/api/Todos';
import { Todo } from '../../types/api';

interface TodoItemProps {
  //id: number;
  todo: Todo;
  setTodos: Function;
  toggleTodoCompletion: (id: number, completed: boolean) => void;
}

export const TodoItem: VFC<TodoItemProps> = ({ todo }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const toggleTodoCompletion = async (todo: Todo) => {
    try {
      const res = await completedTodo(todo.id!);
      console.log(res);

      if (res.status === 200) {
        setTodos(
          todos.map((todo: Todo) =>
            todo.id === todo.completed ? res.data.id : todo
          )
        );
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      const res = await deleteTodo(id);
      console.log(res);

      if (res.status === 200) {
        setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id));
      } else {
        console.log(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => toggleTodoCompletion(todo)}>
          {todo.completed ? '未完了' : '完了'}
        </button>
      </td>
      <td>
        <button onClick={() => handleDeleteTodo(todo.id || 0)}>Delete</button>
      </td>
    </tr>
  );
};
