import { useContext } from "react"
import { Context } from "../context/Context";
import Card from "./Card";

export default function Memories() {
    const {
        isLoading,
        isError,
        memories,
    } = useContext(Context);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            <div className="grid grid-cols-2 gap-8 pb-8">
                {memories.length > 0 ? memories.map((memo, ind) => (
                    <Card key={ind} />
                )) : <>
                    <p>Oops, memories have not created yet!</p>
                </>}
            </div>
            {isError && <h1>{isError}</h1>}
        </div>
    )
}