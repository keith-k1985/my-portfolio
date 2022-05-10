import { Todo } from './index';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api';

// todo一覧を取得
export const getTodos = () => {
  // todosの空の配列を用意＋型の宣言
  let todos: Todo[] = [];
  return axios.get('/tasks').then((res) => {
    console.log(res);
    // res.data.data.mapでtodosにデータを代入する
    // loop内でusers[0].pivot.completedをloopオブジェクトのcompletedに代入する
    todos = res.data.data.map((todo: Todo) => {
      if (todo.users) {
        todo.completed = todo.users[0].pivot.completed;
      }
      return todo;
    });
    // return todosにする
    return todos;
  });
};

// todoを新規作成
export const createTodo = (data: Todo) => {
  return axios({
    url: `/task?title=${data.title}&date=${data.date}&userIds=1`,
    method: 'post',
  });
};

// todoを削除
export const deleteTodo = (id: number) => {
  return axios({
    url: `/task/${id}`,
    method: 'delete',
  });
};

// todoを更新
export const completedTodo = (id: number) => {
  return axios({
    url: `/task/${id}/completed?userId=1`,
    method: 'put',
  });
};
