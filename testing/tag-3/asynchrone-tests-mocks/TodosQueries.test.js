const axios = require("axios");
const TodosQueries = require("./TodosQueries");

// Axios .get Methode soll die weitere Funktion mockResolvedValue erhalten
jest.mock("axios");

const returnedTodo1 = {
  id: 1,
  task: "Completed Project",
  isDone: true,
  DueDate: "2027-12-09T23:00:00.000Z",
  userid: 2,
  createdAt: "2024-02-26T13:08:38.000Z",
  updatedAt: "2024-02-27T13:31:47.000Z",
};

describe("Testing GET Functions of Todo Route", () => {
  afterEach(() => {
    axios.mockRestore();
  });

  test("Teste GET all Funktion", async () => {
    const mockData = {
      data: [returnedTodo1],
    };

    axios.get.mockResolvedValue(mockData);

    const result = await TodosQueries.fetchAllTodos();

    expect(result).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/all"
    );
  });

  test("Teste GET ById Funktion", async () => {
    const myInput = {
      data: { todo: returnedTodo1 },
    };

    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchTodoById(1);

    expect(result).toEqual(myInput.data.todo);
    expect(axios.get).toHaveBeenCalledTimes(2);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/byid",
      { params: { todoId: 1 } }
    );
  });

  test("Teste GET ByUserId Funktion", async () => {
    const myInput = {
      data: { todos: returnedTodo1 },
    };

    axios.get.mockResolvedValue(myInput);

    const result = await TodosQueries.fetchTodoByUserId(2);

    expect(result).toEqual(myInput.data.todos);
    expect(axios.get).toHaveBeenCalledTimes(3);
    expect(axios.get).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/byuserid",
      { params: { userid: 2 } }
    );
  });
});
