import axios from "axios";

const API_KEY = "AIzaSyB8SlD-pDQ4BnyBtC6Z7-a48eO4FmP0MyE";
const baseUrl = {
  DB: "https://bc-34-be4cc-default-rtdb.firebaseio.com",
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  REFRESH: "https://securetoken.googleapis.com/v1",
};

const setBaseUrl = (url) => (axios.defaults.baseURL = url);
// "/users/ada/name.json?auth=<ID_TOKEN>"
export const addTodoApi = ({ todo, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .post(`/users/${localId}/todo.json`, todo, { params: { auth: idToken } })
    .then((res) => {
      const { data } = res;
      return { ...todo, id: data.name };
    });
};

export const getTodoApi = ({ localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .get(`/users/${localId}/todo.json`, { params: { auth: idToken } })
    .then(({ data }) =>
      data
        ? Object.entries(data).map(([id, dataForm]) => ({ id, ...dataForm }))
        : []
    );
};

export const removeTodoApi = ({ id, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .delete(`/users/${localId}/todo/${id}.json`, { params: { auth: idToken } })
    .then((res) => res.data);
};

export const updateTodoStatusApi = ({ id, data, localId, idToken }) => {
  setBaseUrl(baseUrl.DB);
  return axios
    .patch(`/users/${localId}/todo/${id}/.json`, data, {
      params: { auth: idToken },
    })
    .then((res) => res.data);
};

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
    .post("/accounts:lookup", { idToken }, { params: { key: API_KEY } })
    .then((res) => {
      const { localId, email } = res.data.users[0];
      return { localId, email };
    });
};

// https://securetoken.googleapis.com/v1/token?key=[API_KEY]
export const refreshTokenApi = (refreshToken) => {
  setBaseUrl(baseUrl.REFRESH);
  return axios
    .post(
      "/token",
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
      {
        params: {
          key: API_KEY,
        },
      }
    )
    .then(({ data: { refresh_token: refreshToken, id_token: idToken } }) => ({
      refreshToken,
      idToken,
    }));
};
