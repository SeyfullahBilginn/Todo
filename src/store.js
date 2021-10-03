import { createStore, combineReducers, applyMiddleware} from 'redux'
import numberReducer from './redux/reducers/numberReducer'
import listReducer from "./redux/reducers/listReducer";
import thunk from "redux-thunk"

// const reducers = combineReducers({counter:numberReducer,list:listReducer});
const reducers = combineReducers({list:listReducer});
const store = createStore(reducers,applyMiddleware(thunk));

export default store