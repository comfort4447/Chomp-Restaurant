import React, { createContext,useContext, useReducer } from 'react'

//preparing the data layer
export const StateContext = createContext();

//wrap our componnet and provide the provider.
export const StateProvider = ({reducer, initialState,children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
)

//this is how we use it inside of a components
export const useStateValue = () => useContext(StateContext);