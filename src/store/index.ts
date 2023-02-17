import { combineReducers, createStore } from "redux"
import themeReducer from "./theme/reducer"
import walletReducer from "./wallet/reducer"

const reducers = combineReducers({
    wallet: walletReducer,
    theme: themeReducer
})

const store = createStore(reducers)

export default store