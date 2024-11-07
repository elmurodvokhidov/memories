import { useContext } from "react"
import { Context } from "../context/Context"

export default function Form() {
    const { handleSubmit } = useContext(Context);

    return (
        <form onSubmit={handleSubmit} className="w-[350px] flex flex-col gap-2 rounded-md p-4 bg-white">
            <h1 className="text-center text-2xl mb-2">Creating a Memory</h1>

            <input
                type="text"
                name="creator"
                placeholder="Creator"
                className="w-full outline-heading p-3 rounded-md border border-gray-500"
            />

            <input
                type="text"
                name="title"
                placeholder="Title"
                className="w-full outline-heading p-3 rounded-md border border-gray-500"
            />

            <textarea
                name="message"
                placeholder="Message"
                rows={3}
                className="w-full outline-heading p-3 rounded-md border resize-none border-gray-500"
            ></textarea>

            <input
                type="text"
                name="tags"
                placeholder="Tags"
                className="w-full outline-heading p-3 rounded-md border border-gray-500"
            />

            <button
                type="submit"
                className="w-full p-2 mt-2 text-xl text-white rounded-md bg-blue-500"
            >Submit</button>
        </form>
    )
}