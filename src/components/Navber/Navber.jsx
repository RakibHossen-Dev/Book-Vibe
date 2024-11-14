import { Link, NavLink } from "react-router-dom";
import "../../App.css";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase.init";
import { useState } from "react";

const Navber = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider(auth);

  const handleSignInGoogle = () => {
    console.log("Hello");
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  const links = (
    <>
      <li className="mr-2">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mr-2">
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/dashborad">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box  z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="md:text-2xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div>
              <img className="w-10 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <Link
              onClick={handleSignInGoogle}
              className="py-2 px-6 bg-green-400 hover:text-white hover:bg-green-600 ease-linear duration-200 rounded-md"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
