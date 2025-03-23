import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { getProfile } from "../features/auth/authAction";

import { logout } from "../features/auth/authSlice";

const AvatarMenue = ({avatar}) => {
  const dispatch=useDispatch()
  const profileRef = useRef();

  const [state, setState] = useState(false);
  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Analytics", path: "javascript:void(0)" },
    { title: "Profile", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
  ];

  useEffect(() => {
    
  }, []);
  const onLogOut =()=>{
    console.log ('wanna Log out')
dispatch(logout())
  }

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img src={avatar}
          className="w-full h-full rounded-full" />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button onClick={onLogOut}
        className="block w-full text-justify text-red-800 hover:text-red-800 border-t py-3 lg:hover:bg-gray-50 lg:p-3">
          Logout
        </button>
      </ul>
    </div>
  );
};

export default function AppNavbar() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value)
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const profile = useSelector(state => state.auth.profile)
  const accessToken = useSelector(state => state.auth.accessToken)
  const [state, setState] = useState(false);

  useEffect(() => {
    console.log('app navbar use effect');
    dispatch(getProfile(accessToken));
  }, []);

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title: "Up comming", path: "/Upcomming" },
    { title: "NowPlaying", path: "/NowPlaying" },
    { title: "Top", path: "/Top" },
    { title: "Moviepopular", path: "/Moviepopular" },
  ];

  const submenuNav = [
    { title: "Home", path: "/" },
    { title: "People", path: "/People" },
    { title: "Register", path: "/Register" },
    { title: "AboutUs", path: "/AboutUs" },
    { title: "ContectUs", path: "/ContectUs" },

  ];

  return (
    <header className="text-base lg:text-sm">
      <div
        className={`bg-cyan-950 items-center gap-x-14 px-4  mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        <div className="flex items-center justify-between py-3 lg:py-5 lg:block">
          <a href="javascript:void(0)">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_-AZyRRKHjPmJ0Kw6flXkQ4THX1GhymGEWCyySMHoI4sXdw6tqglyRWRAZMKgTeN3lc&usqp=CAU"
              width={120}
              height={50}
              alt="Float UI logo"
            />
          </a>
          <div className="lg:hidden">
            <button
              className="text-gray-600 hover:text-gray-800"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 py-2 text-white bg-transparent rounded-md outline-none"
                />
              </div>
            </form>
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="block text-white hover:text-red-400"
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          {
            isAuthenticated &&  isAuthenticated ? (
              <AvatarMenue avatar={profile && profile.avatar}/>
            ): (
              <li>
              <Link
                to='/Login'
                className="block text-white hover:text-red-400"
              >
             Login
              </Link>
            </li>
            )
             
           
          }
              
         
          </ul>
        </div>
      </div>
      <nav className="border-b  ">
        <ul className="flex   items-center gap-x-3  max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
          {submenuNav.map((item, idx) => {
            return (
              // Replace [idx == 0] with [window.location.pathname == item.path]
              <li key={idx} className={`py-1 ${idx == 0 ? " " : ""}`}>
                <a
                  href={item.path}
                  className="block py-2 px-3 rounded-lg  m:text-4xl hover:text-orange-600 hover:bg-blue-200 duration-150"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
