import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

//reducers 
const reducer  = combine combineReducers({

})

//initial state
const initialState = {}; 

//middleware
const middleware = [thunk]

//store
const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store