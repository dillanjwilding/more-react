import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../../utilities/request.js'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  useEffect(() => {
    auth().get('/user').then(({ status, data, error }) => {
      if (status === 200 && !error) {
        dispatch({ type: 'LOGIN_SUCCESS', data })
      }
    })
  })
  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_PENDING':
        return { ...state, pending: true, success: false, error: false, user: null }
      case 'LOGIN_SUCCESS':
        return { ...state, pending: false, success: true, error: false, ...action.data }
      case 'LOGIN_ERROR':
        return { ...state, pending: false, success: false, error: true, user: null }
      case 'LOGOUT':
        return { ...state, pending: false, success: false, error: false, user: null }
      default:
        throw new Error() // return state
    }
  }
  const initialState = {
    pending: false,
    success: false,
    error: null,
    user: null
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  const login = (email, password) => {
    dispatch({ type: 'LOGIN_PENDING' })
    auth().post('/login', { email, password }).then(({ status, data, error }) => {
      if (status === 200 && !error) {
        dispatch({ type: 'LOGIN_SUCCESS', data })
      } else dispatch({ type: 'LOGIN_ERROR' })
    }).catch(() => dispatch({ type: 'LOGIN_ERROR' }))
  }
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    window.location.reload()
  }
  return (
    <AuthContext.Provider value={{ login, logout, ...state }}>
      {children}
    </AuthContext.Provider>
  )
}
export const useAuth = () => useContext(AuthContext)
