import { Helmet } from "react-helmet-async";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { getStoredReadList } from "../../utility/addToDB";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Dashbord = () => {
  const [readList, setReadlist] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList);

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadlist(readBookList);
  }, []);

  const data = readList.map((book) => ({
    name: book.bookName || "No Title", // বইয়ের শিরোনাম বা ডিফল্ট "No Title"
    uv: book.totalPages || 0, // আপনার ডাটার নির্দিষ্ট মান এখানে ব্যবহার করুন
  }));

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
      x + width / 2
    }, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="min-h-[650px] flex flex-col justify-center items-center  mt-10">
      <Helmet>
        <title>Book Vibe | Dashboard</title>
      </Helmet>

      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="uv" fill="#2ecc71" shape={<TriangleBar />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashbord;
