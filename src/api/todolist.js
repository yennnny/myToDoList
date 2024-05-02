import { useEffect } from 'react';

// 데이터 불러오는곳~
export const getToDoList = () => {
  const todo = localStorage.getItem('todos');
  return Promise.resolve({
    data: todo ? JSON.parse(todo) : [],
  });
};
