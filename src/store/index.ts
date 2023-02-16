import { combineReducers, createStore } from "redux"
import walletReducer from "./wallet/reducer"

const reducers = combineReducers({
    wallet: walletReducer
})

const store = createStore(reducers)

export default store