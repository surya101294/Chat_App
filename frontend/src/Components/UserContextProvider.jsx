import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

const UserContextProvider = ({children}) => {
  const [username, setUsername]= useState("")
const [id, setId]= useState("")

// useEffect

    return (
    <UserContext.Provider value={{username, setUsername, id,setId}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
