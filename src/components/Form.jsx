import { useContext, useState } from "react"
import { Context } from "../context/Context"
import { addDoc, collection } from "firebase/firestore";
import { projectStore } from "../firebase/config";

export default function Form() {
    const {
        newMemory,
        setNewMemory,
        handleAddAndUpdateMemory,
    } = useContext(Context);

    const getInputValue = (e) => {
        setNewMemory({
            ...newMemory,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={handleAddAndUpdateMemory} className="w-[350px] sticky top-8 flex flex-col gap-2 rounded-md p-4 bg-white">
            <h1 className="text-center text-2xl mb-2">Creating a Memory</h1>

            <input
                type="text"
                name="creator"
                placeholder="Creator"
                className="w-full text-lg outline-heading p-3 rounded-md border border-gray-500"
                required
                value={newMemory.creator}
                onChange={getInputValue}
            />

            <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full text-lg outline-heading p-3 rounded-md border border-gray-500"
                required
                value={newMemory.title}
                onChange={getInputValue}
            />

            <textarea
                name="message"
                placeholder="Message"
                rows={3}
                className="w-full text-lg outline-heading p-3 rounded-md border resize-none border-gray-500"
                required
                value={newMemory.message}
                onChange={getInputValue}
            />

            <input
                type="text"
                name="tags"
                placeholder="art, memory, fun"
                className="w-full text-lg outline-heading p-3 rounded-md border border-gray-500"
                required
                value={newMemory.tags}
                onChange={getInputValue}
            />

            <button
                type="submit"
                className="w-full p-2 mt-2 text-xl text-white rounded-md bg-blue-500"
            >
                Submit
            </button>
        </form>
    )
}