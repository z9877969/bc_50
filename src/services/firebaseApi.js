import axios from "axios";
// https://bc-34-be4cc-default-rtdb.firebaseio.com/message_list.json'

axios.defaults.baseURL = "https://bc-34-be4cc-default-rtdb.firebaseio.com";

export const addTodoApi = (todo) => {
  return axios.post("/todo.json", todo).then((res) => {
    const { data } = res;
    return { ...todo, id: data.name };
  });
};

// {name: "-NVTFiB-Obkh29HBT6uW"}

export const getTodoApi = () => {
  return axios
    .get("/todo.json")
    .then(({ data }) =>
      Object.entries(data).map(([id, dataForm]) => ({ id, ...dataForm }))
    );
};

export const removeTodoApi = (id) => {
  return axios.delete(`/todo/${id}.json`).then((res) => res.data);
};

export const updateTodoStatusApi = (id, data) => {
  return axios.patch(`/todo/${id}/.json`, data).then((res) => res.data);
};

//   PATCH -> {}
