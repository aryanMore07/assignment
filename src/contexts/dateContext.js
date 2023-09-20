/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useReducer } from "react";
import { reducerFunction } from "../reducers/reducerFunction";
export const DateContext = createContext();



export const DateProvider = ({ children }) => {

    const initialState = {
        indTimeZone: false,
    }
    const [dateState, dispatch] = useReducer(reducerFunction, initialState);


    return (
        <DateContext.Provider value={{ dateState, dispatch }}>{children}</DateContext.Provider>
    );
};

export const useDates = () => useContext(DateContext);