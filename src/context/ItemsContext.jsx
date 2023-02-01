import { createContext } from "react";


const ItemsContext = createContext()

const ItemsContextProvider =({children})=>{
    
    return (
        <ItemsContext.Provider>
            {children}
        </ItemsContext.Provider>
    )
}