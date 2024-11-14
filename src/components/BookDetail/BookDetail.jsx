import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDB";
import { Helmet } from "react-helmet-async";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    category,
    review,
    tags,
    totalPages,
    yearOfPublishing,
    publisher,
    rating,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleMarkAsWishlist = (id) => {
    addToStoredWishList(id);
  };
  return (
    <div>
      <Helmet>
        <title>Boi Poka | {bookId}</title>
      </Helmet>
      <h1>Book Details:{currentBookId}</h1>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="bg-gray-100 rounded-lg py-32 px-4 lg:w-1/2 flex justify-center items-center">
          <img className="w-48" src={image} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl mb-2 font-bold">{bookName}</h3>
          <p className="font-medium text-gary-900 mb-2">By: {author}</p>
          <div className="border-b"></div>
          <p className="py-3">{category}</p>
          <div className="border-b"></div>
          <p className="my-3">
            <span className="text-md font-bold ">Review</span>: {review}
          </p>
          <div className="mb-3">
            Tag
            {tags.map((tag, idx) => (
              <button
                key={idx}
                className=" ml-3 bg-green-100 rounded-lg py-2 px-6 cursor-default text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="border-b"></div>
          <p className="mt-3 text-gray-400">Number of Pages: {totalPages}</p>
          <p className="mt-3 text-gray-400">Publisher: {publisher}</p>
          <p className="mt-3 text-gray-400">
            Publisher of Year: {yearOfPublishing}
          </p>
          <p className="mt-3 text-gray-400">Rating{rating}</p>
          <button
            onClick={() => handleMarkAsRead(bookId)}
            className="border py-2 px-6 rounded-md "
          >
            Read
          </button>
          <button
            onClick={() => handleMarkAsWishlist(bookId)}
            className="py-2 px-6 bg-blue-400 rounded-md text-white m-3"
          >
            WhishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
