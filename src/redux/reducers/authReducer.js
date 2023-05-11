import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../actions/types'

const initialState = {
  isAuth: true,
  user: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        user: null,
      }
    default:
      return state
  }
}
