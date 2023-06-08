import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleArrowClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isLoggedIn = true; // Set this value based on the user's login status

  return (
    <>
      <header className="pt-4 pb-5">
        <div className="central flex align-middle text-center">
          <Link to="/" className="text-4xl tracking-tight font-bold">
            Learn<span className="opacity-60">ducate</span>
          </Link>
          <nav className="flex flex-grow gap-x-2 justify-end items-center">
            <Link to="/" className="">
              Home
            </Link>
            <Link to="/about" className="">
              About
            </Link>
            <Link to="/courses" className="">
              Courses
            </Link>
            {isLoggedIn ? (
              <div className="userin relative">
                <div className="flex gap-3 items-center">
                  <div className="profile">KB</div>
                  <div className="i-ph-caret-down-fill text-black w-5 cursor-pointer" onClick={handleArrowClick} />
                  {/* <img src="src/assets/img/Arrow.svg" className="w-5" alt="" onClick={handleArrowClick} /> */}
                </div>
                {isDropdownOpen && (
                  <div className="grid absolute top-13 right-0 z-100">
                    <Link to="/tutors/reports" className="btn drop">
                      Reports
                    </Link>
                    <Link to="/" className="btn drop logout">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="userout">
                <Link to="/login" className="login">
                  Login
                </Link>
                <Link to="/register" className="btn">
                  Register
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="py-12 bg-dark-800">
        <div className="central flex justify-between">
          <Link to="/" className="text-3xl text-white tracking-tight font-bold">
            Learn<span className="opacity-60">ducate</span>
          </Link>
          <div className="flex text-white text-lg tracking-tight font-bold">
            <p className="opacity-60">20</p>
            <p>23</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function Layout({ children }) {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const handleArrowClick = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <>
//       <header className="pt-4 pb-5">
//         <div className="central flex">
//           <Link to="/" className="text-4xl tracking-tight font-bold">
//             Learn<span className="opacity-60">ducate</span>
//           </Link>
//           <nav className="flex flex-grow gap-x-2 justify-end items-center">
//             <Link to="/" className="">
//               Home
//             </Link>
//             <Link to="/about" className="">
//               About
//             </Link>
//             <Link to="/courses" className="">
//               Courses
//             </Link>
//             {1 == 1 ? (
//               <>
//                 <div className="userout">
//                   <Link to="/login" className="login">
//                     Login
//                   </Link>
//                   <Link to="/register" className="btn">
//                     Register
//                   </Link>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="userin">
//                   <div className="flex gap-5">
//                     <div className="profile">KB</div>
//                     <img src="src/assets/img/Arrow.svg" className="w-5" alt="" onClick={handleArrowClick} />
//                   </div>
//                   {isDropdownOpen && (
//                     <div className="grid float-right">
//                       <Link to="/tutors/reports" className="btn drop text-brand blue">
//                         Reports
//                       </Link>
//                       <Link to="/" className="btn drop text-red-600">
//                         Logout
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}
//           </nav>
//         </div>
//       </header>
//       <main>{children}</main>
{
  /* <Link to="/login" className="login">
                  Profile
                </Link>
                <Link to="/register" className="btn">
                  Arrow
                </Link>
                <div>
                  <Link to="/register" className="btn text-brand-blue whitespace-normal white">
                    Reports
                  </Link>
                  <Link to="/register" className="btn">
                    Log out
                  </Link>
                </div> */
}
//       <footer className="py-12 bg-dark-800">
//         <div className="central flex justify-between">
//           <Link to="/" className="text-3xl text-white tracking-tight font-bold">
//             Learn<span className="opacity-60">ducate</span>
//           </Link>
//           <div className="flex text-white text-lg tracking-tight font-bold">
//             <p className="opacity-60">20</p>
//             <p>23</p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
