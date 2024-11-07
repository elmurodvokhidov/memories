import { BiSolidLike } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ memo }) {
    return (
        <div className="w-[320px] overflow-hidden rounded-2xl shadow-md bg-white">
            <div className="relative cursor-pointer">
                <div className="w-full absolute z-20 flex items-center justify-between text-white p-4">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-semibold">{memo?.creator}</h1>
                        <p className="text-sm">2 months ago</p>
                    </div>

                    <button>
                        <BsThreeDots />
                    </button>
                </div>

                <Link to={`/details/${memo?.id}`} className="size-full absolute opacity-0 hover:opacity-50 transition-opacity duration-300 z-10 bg-gray-200"></Link>

                <img
                    // src="https://placehold.co/320x180"
                    src="https://www.parachute-club-cannes.com/wp-content/uploads/2013/12/G00254191-1024x561.jpg"
                    alt="memories"
                    className="w-[320px] h-[180px] relative z-0 object-cover"
                />
            </div>

            <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center gap-2 text-gray-500">
                    {memo?.tags?.map((tag, ind) => (<p key={ind}>#{tag}</p>))}
                </div>

                <h1 className="text-2xl my-2">{memo?.title}</h1>

                <p className="text-gray-500">{memo?.message}</p>

                <div className="flex items-center justify-between">
                    <button className="flex items-center gap-1 uppercase text-blue-500">
                        <BiSolidLike />
                        <span>Like: </span>
                        <span>{memo?.likeCount}</span>
                    </button>
                    <button className="flex items-center gap-1 uppercase text-blue-500">
                        <MdDelete />
                        <span>Delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}