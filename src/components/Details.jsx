import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { Context } from "../context/Context";
import { doc, getDoc } from "firebase/firestore";
import { projectStore } from "../firebase/config";

export default function Details() {
    const {
        setIsLoading,
        setIsError,
        memory,
        setMemory,
    } = useContext(Context);

    const { id } = useParams();

    // get single document from firebase store
    useEffect(() => {
        const getSingleDocument = async () => {
            try {
                setIsLoading(true);
                const docRef = doc(projectStore, "memories", id);
                const snapshot = await getDoc(docRef);
                // check if the document exists
                setMemory(snapshot.data());
            } catch (error) {
                console.log("Bitta ma'lumotni serverdan olishda xatolik yuz berdi: ", error);
                setIsError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getSingleDocument();
    }, [id])

    return (
        <div>{memory?.message}</div>
    )
}