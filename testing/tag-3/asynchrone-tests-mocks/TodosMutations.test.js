const axios = require("axios");
const TodosMutations = require("./TodosMutations");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  newTask: "Scrum Team",
  newIsDone: false,
  newDueDate: "2024-01-23",
};

describe("Testing POST Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Teste POST Create Funktion", async () => {
    const mockData = {
      data: { todo: returnedTodo1 },
    };
    axios.post.mockResolvedValue(mockData);
    const myDate = new Date();
    const result = await TodosMutations.createTodo(
      4,
      "Scrum Team",
      false,
      myDate
    );

    expect(result).toEqual(mockData.data.todo);
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/create",
      {
        newDueDate: myDate,
        newIsDone: false,
        newTask: "Scrum Team",
        newUserId: 4,
      }
    );
  });

  test("markTodo - should mark a todo as done", async () => {
    const mockData = {
      data: { updatedTodo: { id: 1, isDone: true } },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.markTodo(1, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      {
        todoId: 1,
        newIsDone: true,
      }
    );
  });

  test("updateTodo - should update a todo", async () => {
    const mockData = {
      data: {
        updatedTodo: {
          id: 1,
          task: "Product Owner",
          isDone: true,
          dueDate: "2022-12-31",
        },
      },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.updateTodo(
      1,
      "Updated Task",
      false,
      "2022-12-31"
    );

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      {
        todoId: 1,
        newTask: "Updated Task",
        newIsDone: false,
        newDueDate: "2022-12-31",
      }
    );
  });

  test("deleteTodo - should delete a todo", async () => {
    const mockData = { data: { todoId: 10 } };
    axios.delete.mockResolvedValue(mockData);

    const result = await TodosMutations.deleteTodo(10);

    expect(result).toEqual(mockData.data.todoId);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      {
        data: { todoId: 10 },
      }
    );
  });
});
