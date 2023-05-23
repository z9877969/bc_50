import { createAction, createReducer } from "@reduxjs/toolkit";

const createActionType = (name, methodName) => `${name}/${methodName}`;

export const createSlice = ({
  name,
  initialState,
  reducers = {}, // {cb: (state, action) => {return state}}
  extraReducers = null, // builder => {}
}) => {
  const reducersCollection = Object.entries(reducers); // [[methodName, method], [methodName, method]]
  const actions = reducersCollection.reduce((acc, [methodName, method]) => {
    acc[methodName] = createAction(createActionType(name, methodName));
    return acc;
  }, {});

  const reducer = createReducer(initialState, (builder) => { // {addCase, addMatcher, addDefaultCase}
    reducersCollection.length &&
      reducersCollection.forEach(([methodName, method]) => {
        builder.addCase(createActionType(name, methodName), method);
      });
    extraReducers && extraReducers(builder);
  });

  return {
    reducer,
    actions,
  };
};
