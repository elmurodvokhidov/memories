import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
    // here your state and functions
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);
    const [memories, setMemories] = useState([0, 1, 3, 4]);

    // form submitting...
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello from form 👋");
    }

    return (
        <Context.Provider value={{
            // export your state and functions here
            isLoading,
            setIsLoading,
            isError,
            setIsError,
            memories,
            setMemories,
            handleSubmit,
        }}>
            {children}
        </Context.Provider>
    )
}