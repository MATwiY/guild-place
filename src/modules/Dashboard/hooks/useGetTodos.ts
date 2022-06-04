import axios from "axios";
import { useQuery } from "react-query";

const getTodos = async () => {
  const response = await axios.get<TodoItem[]>(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
};

export const useGetTodos = () => useQuery("todos", getTodos);
