import { BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

export default function Card() {
    return (
        <div className="w-[320px] overflow-hidden rounded-2xl bg-white">
            <div className="relative">
                <div className="w-full absolute flex items-center justify-between text-white p-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-semibold">John Doe</h1>
                        <p className="text-sm">2 months ago</p>
                    </div>

                    <button>
                        <BsThreeDots />
                    </button>
                </div>

                <img src="https://placehold.co/320x180" alt="memories" className="" />
            </div>

            <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-2 text-gray-500">
                    <p>#art</p>
                    <p>#history</p>
                    <p>#lecture</p>
                </div>

                <h1 className="text-2xl my-2">Visited the Escape Room</h1>

                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus accusantium, sapiente amet dignissimos quos quaerat!</p>

                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-1 uppercase text-heading">
                        <BiSolidLike />
                        <span>Like: </span>
                        <span>0</span>
                    </button>
                    <button className="flex items-center gap-1 uppercase text-heading">
                        <MdDelete />
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}