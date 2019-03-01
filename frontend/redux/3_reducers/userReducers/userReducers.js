import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import createUserReducer from './createUserReducer'
import loginReducer from './loginReducer'
import logoutReducer from './logoutReducer'

const configLogin = { key: 'loginReducer', storage }

const userReducers = combineReducers({
  createUserReducer,
  loginReducer: persistReducer(configLogin, loginReducer),
  logoutReducer,
})

export default userReducers
