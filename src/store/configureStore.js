import {compose, createStore,applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'// defaults to localStorage for web
import rootReducer from "../reducers";
import thunk from 'redux-thunk';



const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        ));
    let persistor = persistStore(store);
    return {store, persistor}
}

