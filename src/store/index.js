import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    increment(state,action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter() {},
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + action.payload,
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - action.payload,
//     };
//   }

//   return state;
// };


const initialAuthState = {isAuthenticated:false}
const AuthSlice = createSlice({
  name:"authentication",
  initialState:initialAuthState,
  reducers:{
    login(state){
       state.isAuthenticated = true
    },
    logout(state){
      state.isAuthenticated = false
    }
  }
})
const store = configureStore({
  reducer: {counter:counterSlice.reducer,auth:AuthSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = AuthSlice.actions;
export default store;
