import categoryReducer from "./category.reducers";
import { combineReducers } from 'redux';



const rootReducer = combineReducers({
    categories: categoryReducer,
});

export default rootReducer;