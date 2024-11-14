import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDB";
import ListedBook from "../ListedBook/ListedBook";
import { Helmet } from "react-helmet-async";
import Books from "../Books/Books";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
  const [readList, setReadlist] = useState([]);
  const [wishList, setWishtlist] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList);
    // console.log(storedReadList, storedReadListInt, allBooks);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadlist(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    console.log(storedWishList);

    const readWishList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );
    setWishtlist(readWishList);
  }, []);

  console.log(readList);

  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType === "No of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadlist(sortedReadList);
    }
    if (sortType === "Ratings") {
      const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
      setReadlist(sortedReadList);
    }
  };

  return (
    <div className="mt-5 min-h-[300px]">
      <Helmet>
        <title>Book Vibe | Listedbooks</title>
      </Helmet>

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1  mb-5 bg-green-500 px-10 text-white font-bold "
        >
          {sort ? `Sort by : ${sort}` : "Sort by"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={() => handleSort("Ratings")}>
            <a className="text-green-600 font-medium">Ratings</a>
          </li>
          <li onClick={() => handleSort("No of pages")}>
            <a className="text-green-600 font-medium">Number of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read : {readList.length}</h2>
          {readList.map((book) => (
            <ListedBook book={book}></ListedBook>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>My Wishlist : {wishList.length} </h2>
          {wishList.map((book) => (
            <WishList book={book}></WishList>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
