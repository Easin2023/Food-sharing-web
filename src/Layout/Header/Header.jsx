import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import logo from "../../assets/1611311802-FeastBar-100-removebg-preview.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.photoURL);

  const handleLogout = () => {
    logout();
  };

  const navBar = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "btn btn-primary sm:mb-4 mr-5 text-xl"
            : "mr-5 btn text-xl"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Available_Foods"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "btn btn-primary sm:mb-4 mr-5 text-xl"
            : "mr-5 btn text-xl sm:mb-4 "
        }
      >
        Available Foods
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/Add_Food"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " mr-5 btn btn-primary sm:mb-4 text-xl"
                : "mr-5 btn text-xl sm:mb-4  "
            }
          >
            Add Food
          </NavLink>
          <NavLink
            to="/Manage_My_Foods"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? " btn btn-primary sm:mb-4 mr-5 text-xl"
                : "mr-5 btn text-xl sm:mb-4 "
            }
          >
            Manage My Foods
          </NavLink>
          <NavLink
            to="/My_Food_Request"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "btn btn-primary sm:mb-4 mr-5 text-xl"
                : "mr-5 btn text-xl sm:mb-4 "
            }
          >
            My Food Request
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navBar}
          </ul>
        </div>
        <Link>
          <img className="w-40" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navBar}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="w-44 flex items-center gap-3 bg-orange-100 rounded-full">
            <div className="dropdown avatar online dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-40 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
          <div className="font-">{user?.displayName}</div>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline mr-3 font-semibold btn-secondary">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
