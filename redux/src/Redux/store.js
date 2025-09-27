import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { formReducer } from "./reducers/formReducer";
import { thunk } from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
  key: 'root',
  storage,
}



const rootReducer = combineReducers({
    counter: counterReducer,
    forms: formReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const redux_devtool_ext = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composer = compose(applyMiddleware(thunk),redux_devtool_ext)

export const store = legacy_createStore(persistedReducer, composer)

export const persistedStore = persistStore(store)
