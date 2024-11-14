import { FaRegStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ListedBook from "../ListedBook/ListedBook";
const Book = ({ book }) => {
  const { bookId, bookName, image, author, rating, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div>
        <div className="shadow-sm rounded-md p-3 border lg:h-[480px]">
          <div className="flex justify-center items-center bg-gray-100 py-5 rounded-lg mb-3">
            <img className="w-36 h-52" src={image} alt="" />
          </div>
          <div className="space-y-3">
            <div className="flex justify-center text-center">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className=" ml-3 bg-green-100 rounded-lg py-2 px-6 cursor-default text-green-500"
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="text-2xl font-bold">{bookName}</h2>
            <p className="text-gray-400">By: {author}</p>

            <div className="border-b border-dashed"></div>
            <div className="flex justify-between items-center">
              <div className="text-bold">{category}</div>
              <div className="text-bold flex items-center justify-center gap-2">
                <FaRegStar />
                {rating}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
