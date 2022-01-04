import React, { useState, createContext } from 'react'

const UserContext = createContext({})

const UserProvider = ({ children }) => {
  const [data, setContextValues] = useState({ username: 'Hassan Khan' });

  const setData = (values) => {
    if (typeof values !== "object") alert("Value in context should be an object!");
    setContextValues({ ...data, ...values });
  }

  return <UserContext.Provider value={{ data, setData }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider };
