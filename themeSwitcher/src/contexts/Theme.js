import { createContext, useContext } from "react";

//here we are creating the context that will become the context for the components who will use these context as props like lightTheme and darkTheme 
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

//this will become the profider of the props that r in hook
export const ThemeProvider = ThemeContext.Provider

//useTheme will be the name of the hook and through this we can use this hook bcoz useContext is used here 
export default function useTheme(){
    return useContext(ThemeContext) 
}