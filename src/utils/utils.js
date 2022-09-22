// Function to sort the Todos
export const sortTodoList = (todostList) => {
  const todosDone = todostList.filter((todos) => todos.state === true);
  const todosInProgress = todostList.filter((todos) => todos.state === false);

  todosDone.sort(
    (firstDate, secondDate) => secondDate.createdAt - firstDate.createdAt
  );
  todosInProgress.sort(
    (firstDate, secondDate) => secondDate.createdAt - firstDate.createdAt
  );

  const sortedTodosList = [...todosInProgress, ...todosDone];

  return sortedTodosList;
};

// Function to update the Todos
export const updateStateTodoList = (todostList, idTodoToUpdate) => {
  const { id, title, state, createdAt } = todostList.filter(
    (todo) => todo.id === idTodoToUpdate
  )[0];

  const updateTodoList = todostList.filter(
    (todo) => todo.id !== idTodoToUpdate
  );
  updateTodoList.push({ id, title, createdAt, state: !state });

  return sortTodoList(updateTodoList);
};

// Increment id
export const incrementId = (todolist) => {
  const todosId = todolist.map((todo) => todo.id);
  const maxId = Math.max(...todosId);

  return Number(maxId + 1);
};

// Add date to todos
export const addDate = (todolist) => {
  // add Date to the Todos
  const addDateToTodos = todolist.map((todo) => ({
    ...todo,
    createdAt: Date.parse(new Date()),
  }));

  return addDateToTodos;
};
