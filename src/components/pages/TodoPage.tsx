import { useState, useEffect, VFC } from 'react';
import { getTodos } from '../../types/api/Todos';
import { TodoForm } from '../todocomponents/TodoForm';
import { Todo } from '../../types/api';
import { TodoList } from '../todocomponents/TodoList';

export const TodoPage: VFC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleGetTodos = async () => {
    const todos = await getTodos();
    setTodos(todos!);
    console.log(todos);

    //   if (res.status === 200) {
    //     setTodos(res.data.data);
    //   } else {
    //     console.log(res.data.message);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        toggleTodoCompletion={function (id: number): void {
          throw new Error('Function not implemented.');
        }}
      />
    </>
  );
};
