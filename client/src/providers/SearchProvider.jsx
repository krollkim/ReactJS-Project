import { createContext, useState } from "react"

export const searchContext = createContext()

export const SearchProvider = ({children}) => {
    const [ searchQuery, setSearchQuery] = useState("")

    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }
    return (
        <searchContext.Provider value={{searchQuery,setSearchQuery,handleChange}}>
            {children}
        </searchContext.Provider>
    )
}