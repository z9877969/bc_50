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

import authReducer from "./auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import storage from "redux-persist/lib/storage";
import todoReducer from "./todo/todoSlice";

const authPersistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["idToken"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    count: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    // customLogger,
  ],
});

export const persistor = persistStore(store);
