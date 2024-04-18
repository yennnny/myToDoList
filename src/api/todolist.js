import { useEffect } from 'react';

// 데이터 불러오는곳~
export const getToDoList = () => {
  const todo = localStorage.getItem('todos');
  return todo ? JSON.parse(todo) : [];
};
