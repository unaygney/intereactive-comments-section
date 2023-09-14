import React,{createContext , useContext} from "react";


const CommentContext = createContext();

 const CommentContextProvider = ({children , data} ) => {
return <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
}

function useComment() {
    const context = useContext(CommentContext)

    if(!context){
    throw new Error('There is no comment context provider.')
    }

    return context
}

export {useComment , CommentContextProvider}