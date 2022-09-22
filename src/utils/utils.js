// Function to sort the Todos
export const sortTodoList = (todostList) => {
  const sortTodosList = todostList.sort((oneTodo) => {
    if (oneTodo.state) return 0;
    if (!oneTodo.state) return -1;
    return 0;
  });
  return sortTodosList;
};

// Function to update the Todos
export const updateTodoList = (todostList, idTodoToUpdate) => {
  const { id, title, state } = todostList.filter(
    (todo) => todo.id === idTodoToUpdate
  )[0];

  const updateTodoList = todostList.filter(
    (todo) => todo.id !== idTodoToUpdate
  );
  updateTodoList.push({ id, title, state: !state });
  console.log("update de la todoList", updateTodoList);

  return sortTodoList(updateTodoList);
};
