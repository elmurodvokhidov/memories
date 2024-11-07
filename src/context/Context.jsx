import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { projectStore } from "../firebase/config";

export const Context = createContext();

export function ContextProvider({ children }) {
    // here your state and functions
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [memories, setMemories] = useState([]);
    const [memory, setMemory] = useState({});

    // form submitting...
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello from form 👋");
    }

    // get collection from firebase store
    useEffect(() => {
        const getCollection = async () => {
            try {
                setIsLoading(true);
                const snapshot = await getDocs(collection(projectStore, "memories"));
                setMemories(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.log("Barcha ma'lumotlarni serverdan olishda xatolik yuz berdi: ", error);
                setIsError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getCollection();
    }, [])

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
            memory,
            setMemory,
        }}>
            {children}
        </Context.Provider>
    )
}