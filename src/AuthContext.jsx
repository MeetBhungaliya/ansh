import React, { createContext, useState } from 'react'

export const auth = createContext()

const AuthContext = ({ children }) => {
  const [token, setToken] = useState(false)


  return (
    <auth.Provider value={{ token, setToken }}>
      {children}
    </auth.Provider>
  )
}

export default AuthContext