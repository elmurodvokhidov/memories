import Bar from "../components/Bar";
import Form from "../components/Form";
import Memories from "../components/Memories";

export default function Home() {
    return (
        <div className="w-3/4 mx-auto font-sans">
            <Bar />

            <main className="flex items-start justify-between">
                <Memories />
                <Form />
            </main>
        </div >
    )
}