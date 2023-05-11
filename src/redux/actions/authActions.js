import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './types'

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
})

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
})
