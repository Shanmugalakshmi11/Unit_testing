const axios = require("axios");

async function createTodo(newUserId, task, isDone, dueDate) {
  const result = await axios.post("http://localhost:5050/v1/todos/create", {
    newUserId: newUserId,
    newTask: task,
    newIsDone: isDone,
    newDueDate: dueDate,
  });

  const newTodo = result.data.todo;
  console.log("newTodo", newTodo);
  return newTodo;
}

async function markTodo(todoId, isDone) {
  const result = await axios.put("http://localhost:5050/v1/todos/mark", {
    todoId: todoId,
    newIsDone: isDone,
  });

  const todo = result.data.updatedTodo;
  console.log("Mark Todo", todo);
  return todo;
}

async function updateTodo(updateId, updateTask, updateIsDone, updateDueDate) {
  const result = await axios.put("http://localhost:5050/v1/todos/update", {
    todoId: updateId,
    newTask: updateTask,
    newIsDone: updateIsDone,
    newDueDate: updateDueDate,
  });

  const todo = result.data.updatedTodo;
  console.log("Updated Todo", todo);
  return todo;
}

async function deleteTodo(todoId) {
  const result = await axios.delete("http://localhost:5050/v1/todos/delete", {
    data: { todoId },
  });

  const deletedTodo = result.data.todoId;
  console.log("Deleted Todo", deletedTodo);
  return deletedTodo;
}

module.exports = { createTodo, markTodo, updateTodo, deleteTodo };
