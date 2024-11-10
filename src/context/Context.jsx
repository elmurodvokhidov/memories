import { collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { projectStore } from "../firebase/config";

export const Context = createContext();

export function ContextProvider({ children }) {
    // here your state and functions
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);
    const [memories, setMemories] = useState([]);
    const [memory, setMemory] = useState({});
    const [newMemory, setNewMemory] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        likeCount: 0,
    });

    // get collection from firebase store
    const getCollection = async () => {
        try {
            setIsLoading(true);
            const snapshot = await getDocs(collection(projectStore, "memories"));
            setMemories(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        } catch (error) {
            console.log("Error getting document: ", error);
            setIsError(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getCollection();
    }, [])

    const handleAddAndUpdateMemory = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);

            // to add a new document to a collection in firebase
            if (!newMemory.id) {
                const tags = newMemory.tags.split(", ");
                setNewMemory({ ...newMemory, tags });

                const colRef = collection(projectStore, "memories");
                await addDoc(colRef, { ...newMemory, createdAt: new Date().toISOString() });
            }

            // update a document in firestore
            else {
                const docRef = doc(projectStore, "memories", newMemory.id);
                await updateDoc(docRef, newMemory);
            }

            setNewMemory({ creator: "", title: "", message: "", tags: "" });
            getCollection();
        } catch (error) {
            console.log("Error adding document: ", error);
            setIsError(error);
        } finally {
            setIsLoading(false);
        }
    }

    // delete a document in firestore
    const handleDeleteMemory = async (id) => {
        try {
            const docRef = doc(projectStore, "memories", id);
            await deleteDoc(docRef);
            getCollection();
        } catch (error) {
            console.log("Error delete document: ", error);
            setIsError(error);
        }
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
            memory,
            setMemory,
            newMemory,
            setNewMemory,
            handleAddAndUpdateMemory,
            handleDeleteMemory,
        }}>
            {children}
        </Context.Provider>
    )
}