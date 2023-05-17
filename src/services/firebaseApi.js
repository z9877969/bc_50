import axios from "axios";

const API_KEY = "AIzaSyB8SlD-pDQ4BnyBtC6Z7-a48eO4FmP0MyE";
const baseUrl = {
  DB: "https://bc-34-be4cc-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);

export const addTodoApi = (todo) => {
  return axios.post("/todo.json", todo).then((res) => {
    const { data } = res;
    return { ...todo, id: data.name };
  });
};

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

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

// ''
export const registerUserApi = (userForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signUp",
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { idToken, email, refreshToken, localId } }) => ({
      idToken,
      email,
      refreshToken,
      localId,
    }));
};

export const loginUserApi = (userForm) => {
  setBaseUrl(baseUrl.AUTH);
  return axios
    .post(
      "/accounts:signInWithPassword",
      {
        ...userForm,
        returnSecureToken: true,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { localId, email, idToken, refreshToken } }) => ({
      localId,
      email,
      idToken,
      refreshToken,
    }));
};

// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY]
export const getCurUserApi = (idToken) => {
  setBaseUrl(baseUrl.AUTH);

  return axios
    .post("/accounts:looku", { idToken }, { params: { key: API_KEY } })
    .then((res) => {
      const { localId, email } = res.data.users[0];
      return { localId, email };
    });
};

// loginUser -> axios.defaults.headers.common.Authorization = "Bearer token"
// addContact -> token -> header.Authorization
// getContact -> token -> header.Authorization
// removeContact -> token -> header.Authorization
// editContact -> token -> header.Authorization
