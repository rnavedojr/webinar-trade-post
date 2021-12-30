import { createContext, useState } from "react";

export const AuthContext = createContext()

const initialState = {
  id: null,
  name: null,
  email: null,
  logged: false
}

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(initialState)

  const loginUser = (id, name, email) => {

    localStorage.setItem('user', JSON.stringify({ id, name, email, logged: true }))
    setAuth({
      id,
      name,
      email,
      logged: true
    })

  }

  const userExists = () => {

    const userExist = localStorage.getItem('user')

    if (userExist) {

      const user = JSON.parse(userExist)

      setAuth({
        id: user.id,
        name: user.name,
        email: user.email,
        logged: true
      })

      return true

    }
  }

  const logoutUser = () => {
    localStorage.removeItem('user')
    setAuth({
      id: null,
      name: null,
      email: null,
      logged: false
    })
  }

  return (
    <AuthContext.Provider value={{
      auth,
      loginUser,
      userExists,
      logoutUser
    }}>
      {children}
    </AuthContext.Provider>
  )
}