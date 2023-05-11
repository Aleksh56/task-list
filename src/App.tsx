import React from 'react'
import AuthPage from './components/Auth/AuthPage'
import Home from './components/Home/Home'
import { useSelector } from 'react-redux'
import { RootState } from './redux/types'

const App = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  return isAuth ? <Home /> : <AuthPage />
}

export default App
