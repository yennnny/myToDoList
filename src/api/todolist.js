import { useEffect } from 'react';

// 데이터 불러오는 곳
export const getToDoList = () => {
  const todo = localStorage.getItem('todos');
  return Promise.resolve({
    data: todo ? JSON.parse(todo) : [],
  });
};

export const saveTodo = (newTodo) => {
  let todo = localStorage.getItem('todos');

  try {
    todo = todo ? JSON.parse(todo) : [];
  } catch {
    todo = [];
  }

  // 1. 배열에 새로운 값을 추가하고
  todo.push(newTodo);

  // 2. 배열을 문자열로 JSON 문자열로 만든후에
  // JSON.stringify(todo)

  // 3. 다시 localStorage에 저장하면 끝~
  localStorage.setItem('todos', JSON.stringify(todo));

  return Promise.resolve({
    data: newTodo,
  });
};
