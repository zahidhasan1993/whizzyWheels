import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/1.png";
import { DataProvider } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(DataProvider);
  const [hover,setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch();
  };
  // console.log(user);
  return (
    <div className="navbar bg-base-100 my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                    : "hover:bg-amber-700 hover:text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoys"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                    : "hover:bg-amber-700 hover:text-white"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  isActive
                    ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                    : " hover:bg-amber-700 hover:text-white"
                }
              >
                Blogs
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/addtoys"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                        : "hover:bg-amber-700 hover:text-white"
                    }
                  >
                    Add Toy
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/mytoys"
                    className={({ isActive }) =>
                      isActive
                        ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                        : "hover:bg-amber-700 hover:text-white"
                    }
                  >
                    My Toy
                  </NavLink>
                </li>
              </>
            ) : (
              <></>
            )}
          </ul>
        </div>
        <img src={logo} className="w-14" alt="" />
        <a className="btn btn-ghost normal-case text-xl">
          Whizzy<span className="text-amber-700">Wheels</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal  px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                  : "hover:bg-amber-700 hover:text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alltoys"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                  : "hover:bg-amber-700 hover:text-white"
              }
            >
              All Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                  : "hover:bg-amber-700 hover:text-white"
              }
            >
              Blogs
            </NavLink>
          </li>
          {user ? (
            <>
              <li>
                <NavLink
                  to="/addtoys"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                      : "hover:bg-amber-700 hover:text-white"
                  }
                >
                  Add Toy
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
          {user ? (
            <>
              <li>
                <NavLink
                  to="/mytoys"
                  className={({ isActive }) =>
                    isActive
                      ? "text-amber-700 hover:bg-amber-700 hover:text-white"
                      : "hover:bg-amber-700 hover:text-white"
                  }
                >
                  My Toy
                </NavLink>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {
          hover ? <p className="mr-3 text-amber-700 font-bold">{user.displayName}</p> : <></>
        }
        {user ? (
          <>
            <div className="avatar online mr-3" onMouseEnter={onHover} onMouseLeave={onHover}>
              <div className="w-12 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>{" "}
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-error"
            >
              LogOut
            </button>
          </>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline text-amber-700 hover:bg-amber-700 hover:border-none hover:text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
