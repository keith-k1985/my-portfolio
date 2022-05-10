export interface Todo {
  id?: number;
  title: string;
  date: string;
  completed?: boolean;
  created_at?: string;
  updated_at?: string;
  users?: TodoUser[];
}
export interface TodoUser {
  id: number;
  email: string;
  created_at: string;
  updated_at: string;
  pivot: TodoPivot;
}
export interface TodoPivot {
  user_id: number;
  task_id: number;
  created_at: string;
  updated_at: string;
  completed: boolean;
}
