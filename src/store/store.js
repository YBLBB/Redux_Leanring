import { legacy_createStore } from "redux";
import userReducer from "./user/UserReducer";

const store = legacy_createStore(userReducer)


export default store

