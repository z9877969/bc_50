import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";

import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counter/counterReducer";
import counterReducer from "./counter/counterSlice";
import storage from "redux-persist/lib/storage";
// import todoReducer from "./todo/todoReducer";
import todoReducer from "./todo/todoSlice";

const persistTodoConfig = {
  key: "todo",
  storage: storage,
  // whitelist: ["filter"],
  blacklist: ["filter"],
};

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["name"],
};

const persistedTodoReducer = persistReducer(persistTodoConfig, todoReducer);

export const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: persistedTodoReducer,
    user: persistReducer(
      userPersistConfig,
      (state = { name: "bart" }) => state
    ), // "bart" -> Object
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // preloadedState: {
  //   count: 100,
  //   todo: {
  //     items: [],
  //     filter: "medium",
  //   },
  //   user: {
  //     name: "Bob",
  //     email: "bob@mail.com",
  //   },
  // },
  // devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
