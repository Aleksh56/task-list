import { combineReducers } from 'redux'
import authReducer from './authReducer'
// import someOtherReducer from './someOtherReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  //   someOtherData: someOtherReducer,
})

export default rootReducer
