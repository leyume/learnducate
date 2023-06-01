import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="banner">
        <div className="central h-full flex items-center">
          <div className="py-4 px-8 bg-white  bg-opacity-80">
            <h2 className="text-4xl leading-snug">
              Empowering learners,
              <br />
              seamlessly equipping
              <br />
              educators
            </h2>
          </div>
        </div>
      </section>

      <section className="mb-32 -mt-16">
        <div className="central h-full grid grid-cols-2">
          <div className="bg-brand-blue py-16 text-center">
            <p className="text-2xl font-extralight text-white opacity-70 m-0">LOGIN AS A</p>
            <h3 className="text-5xl text-white mt-0 p-0 mb-6">STUDENT</h3>
            <div className="flex gap-3 justify-center">
              <Link to="/login" className="btn lite">
                LOGIN
              </Link>
              <Link to="/register" className="btn lite">
                REGISTER
              </Link>
            </div>
          </div>
          <div className="bg-gray-800 py-16 text-center">
            <p className="text-2xl font-extralight text-white opacity-70 m-0">LOGIN AS A</p>
            <h3 className="text-5xl text-white mt-0 p-0 mb-6">TUTOR</h3>
            <div className="flex gap-3 justify-center">
              <Link to="/login" className="btn lite border-2 border-blue-400">
                LOGIN
              </Link>
              <Link to="/register" className="btn lite">
                REGISTER
              </Link>
            </div>
          </div>
          {/* <div className="grid bg-dark-700 justify-center place-items-center w-138 h-74">
            <p className="text-2xl text-white font-extralight opacity-70">LOGIN AS A</p>
            <p className="text-5xl font-medium text-white ">TUTOR</p>
            <div className="flex">
              <button className="text-brand-blue w-32 h-12">LOGIN</button>
              <button className="text-brand-blue w-32 h-12">REGISTER</button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
