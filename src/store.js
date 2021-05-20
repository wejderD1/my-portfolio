import { createStore } from "redux";
import reducer from "./service/reducers";

const store = createStore(reducer);

export default store;