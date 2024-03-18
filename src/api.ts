// 型定義ファイルでTodoという名前でエクスポートされているため、インポートで適用させている
import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
  // jsonサーバーからTODOアイテムのリストを取得する目的
  const res = await fetch("http://localhost:3002/task", {
    cache: "no-store",
  });
  //  レスポンスのJSONデータをJavaScriptのオブジェクトに変換し、変数todosに格納する
  const todos = await res.json();
  return todos;
};
export const addTodo = async (todo: Task): Promise<Task[]> => {
  // jsonサーバーからTODOアイテムのリストを取得する目的
  const res = await fetch("http://localhost:3002/task", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  //  レスポンスのJSONデータをJavaScriptのオブジェクトに変換し、変数todosに格納する
  const newTodos = await res.json();
  return newTodos;
};

export const editTodo = async (id: String,newText: string): Promise<Task[]> => {
  // jsonサーバーからTODOアイテムのリストを取得する目的
  const res = await fetch("http://localhost:3002/task/${id}", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({text: newText}),
  });
  //  レスポンスのJSONデータをJavaScriptのオブジェクトに変換し、変数todosに格納する
  const updatedTodos = res.json();
  return updatedTodos;
};
