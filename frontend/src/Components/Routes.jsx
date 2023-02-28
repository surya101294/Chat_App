import React, { useContext } from 'react'
import Login from './login'
import { UserContext } from './UserContextProvider'

const Routes = () => {
    const {username, id} = useContext(UserContext)

    if(username){
        return 'Logged In'
    }
  return (
      <Login/>
  )
}

export default Routes
