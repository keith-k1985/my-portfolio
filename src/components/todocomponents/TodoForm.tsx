import { useState, VFC } from 'react';
import { createTodo } from '../../types/api/Todos';
import { Todo } from '../../types/api';

interface TodoFormProps {
  todos: Todo[];
  setTodos: Function;
}

export const TodoForm: VFC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>('');

  const handleCreateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: title,
      date: '2022-03-07',
    };

    try {
      const res = await createTodo(data);
      console.log(res);

      // if (res.status === 200) {
      //   getTodos().then((res) => {
      //     setTodos(res.data.data);
      //   });
      // const res = await getTodos();
      // console.log(res);

      // if (res.status === 200) {
      //   setTodos(res.data.data);
      // } else {
      //   console.log(res.data.message);
      // }
      setTitle('');
      // } else {
      //   console.log(res.data.message);
      // }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleCreateTodo}>
      <input
        type='text'
        value={title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
      <input type='submit' value='Add' disabled={!title} />
    </form>
  );
};
