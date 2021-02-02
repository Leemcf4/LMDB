import React, { createContext, useReducer } from "react"

const initialState = {
  watchlist: [],
  watched: [],
}

const AddReducer = (state, { payload }) => {
  switch (type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [payload],
      }
    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: [payload],
      }
    default:
      return state
  }
}

export const DispatchContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(AddReducer, initialState)

  return (
    <DispatchContext.Provider
      value={{ watchlist: state.watchlist, watched: state.watched }}
    >
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  )
}
