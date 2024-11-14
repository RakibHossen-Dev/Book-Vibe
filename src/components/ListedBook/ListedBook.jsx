import { CiLocationOn } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const ListedBook = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    publisher,
    yearOfPublishing,
    tags,
    category,
    rating,
  } = book;
  return (
    <div>
      <div className="flex md:flex-row flex-col gap-5 border rounded-md my-5 p-3">
        <div className="flex justify-center items-center bg-gray-100 py-5 px-10 rounded-lg ">
          <img className="w-36 h-48" src={image} alt="" />
        </div>
        <div className="space-y-4 w-full">
          <h3 className="text-2xl font-bold">{bookName}</h3>
          <p className="text-gray-400">{author}</p>
          <div className="flex items-center gap-5">
            <div className="flex justify-center text-center">
              <span className="text-lg font-bold">Tag</span>
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className=" ml-3 bg-green-100 rounded-full py-1 px-4 cursor-default text-green-500"
                >
                  #{tag}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <p>
                <CiLocationOn />
              </p>
              Year of Publishing: {yearOfPublishing}
            </div>
          </div>

          <div className="flex gap-5 item-center text-gray-400">
            <div className="flex items-center gap-2">
              <FaUserGroup />
              <p>{publisher}</p>
            </div>
            <div className="flex gap-2 items-center">
              <RiPagesLine />
              <p>{totalPages}</p>
            </div>
          </div>
          <div className="border-b"></div>
          <div className="flex gap-4">
            <div className="bg-green-200 py-1 px-4 text-green-500 rounded-full">
              Category: {category}
            </div>
            <div className="bg-blue-200 py-1 px-4 text-blue-500 rounded-full">
              Rating: {rating}
            </div>
            <Link to={`/books/${bookId}`}>
              <button className="bg-green-500 py-1 px-4 rounded-full text-white">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListedBook;
