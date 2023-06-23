import { useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [count, setCount] = useState(0);
  return (
    <>
      <section className="banner">
        <div className="central h-full flex items-center">
          <div className="py-10 px-10 bg-white  bg-opacity-80">
            <h2 className="text-7xl leading-none">
              About
              <br />
              Learnducate
            </h2>
          </div>
        </div>
      </section>

      <section className="blu">
        <div className="central items-center">
          <h4 className="text-5xl text-center font-thin text-white leading-normal	">
            Learnducate is an innovative online tutoring platform aimed at empowering learners and seamlessly equipping educators.
          </h4>
        </div>
      </section>
      <section>
        <div className="central py-25 gap-10 grid grid-cols-2">
          <img src="/img/ease.png" alt="" />
          <div className="place-self-center">
            <h2 className="text-5xl leading-tight text-brand-blue">
              Learn with ease
              <br />
              at your own pace
            </h2>
            <div className="font-extralight text-lg	text-justify leading-relaxed">
              <p>
                Learnducate facilitates easy enrollment, empowering students with diverse educational opportunities. Progress tracking keeps students motivated
                through performance monitoring and module completion.
              </p>
              <p>Personalized learning paths utilize intelligent algorithms, tailoring educational journeys to students' interests, goals, and achievements.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="central py-25 gap-10 grid grid-cols-2">
          <div className="place-self-center pr-10">
            <h2 className="text-5xl leading-tight text-brand-blue">
              Seamlessly equipping
              <br />
              educators
            </h2>
            <div className="font-extralight text-lg	text-justify leading-relaxed">
              <p>
                Tutors can effortlessly create courses, manage students, and track their progress. Gain valuable insights through comprehensive performance
                analytics, enhancing teaching effectiveness and fostering student growth.
              </p>
            </div>
          </div>
          <img src="/img/equip.png" alt="" />
        </div>
      </section>
      <section>
        <div className="central py-25 gap-10 grid grid-cols-2">
          <img src="/img/evaluate.png" alt="" />
          <div className="place-self-center">
            <h2 className="text-5xl leading-tight text-brand-blue">
              Fun and effective
              <br />
              student evaluations
            </h2>
            <div className="font-extralight text-lg	text-justify leading-relaxed">
              <p>
                Engage learners with interactive quizzes, tailor assessments with adaptive testing, and save time with automated grading, fostering effective
                evaluation and providing prompt feedback.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-brand-blue relative">
        <div className="central pt-25 pb-0 gap-10 grid grid-cols-2">
          <div className="">
            <h2 className="text-7xl leading-tight text-white">
              Why
              <br />
              Learnducate
            </h2>
            <a
              href="https://github.com/leyume/learnducate"
              target="_blank"
              className="flex items-center gap-2 font-extralight text-2xl	text-justify text-white leading-relaxed"
            >
              <div className="i-mdi-github text-white h-12 w-12 cursor-pointer" />
              Github/learnducate
            </a>
          </div>
          <div className="">
            <div className="bg-white font-extralight text-2xl p-12 rounded-3xl -mb-50	text-justify leading-relaxed">
              <h2 className="text-5xl text-end leading-tight text-brand-blue opacity-30 tracking-tighter	">PROBLEM</h2>
              <p>
                Tutors face complexity and time constraints when setting up courses and exams, while students struggle with complicated interfaces and limited
                interaction with tutors.
              </p>
              <p className="text-lg ">
                Learnducate aims to simplifies course and exam creation for tutors, offering intuitive tools and templates that streamline the process. Students
                benefit from a user-friendly interface, fostering easy navigation and enhanced interaction with tutors, bridging the gap and promoting effective
                learning experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="central pt-72 pb-24 gap-10 grid grid-cols-2">
          <div className="justify-items-start	items-center">
            <h2 className="text-7xl leading-tight text-brand-blue">
              Project
              <br />
              Authors
            </h2>
          </div>
          <div className="flex justify-between text-center">
            <div>
              <img src="/img/leye_a.jpeg" alt="Leye" className="w-56 rounded-3xl" />
              <p className="text-2xl">Leye</p>
              <div className="flex gap-3 justify-center">
                <a href="https://www.linkedin.com/in/leye-oluwaleimu/" target="_blank" className="i-mdi-linkedin text-[#0066C8] h-12 w-12 cursor-pointer" />
                <a href="https://github.com/leyume/" target="_blank" className="i-mdi-github text-black h-12 w-12 cursor-pointer" />
              </div>
            </div>
            <div className="">
              <img src="/img/kabiru_a.jpeg" alt="Kabiru" className="w-56 rounded-3xl" />
              <p className="text-2xl">Kabiru</p>
              <div className="flex gap-3 justify-center">
                <a
                  href="https://www.linkedin.com/in/kabiru-umar-29b0011b4/"
                  target="_blank"
                  className="i-mdi-linkedin text-[#0066C8] h-12 w-12 cursor-pointer"
                />
                <a href="https://github.com/chigari101/" target="_blank" className="i-mdi-github text-black h-12 w-12 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="py-25 text-center justify-center">
          <h3 className="text-7xl text-brand-blue mt-0 p-0 mb-6">Get Started</h3>
          <div className="flex mt-10 gap-6 justify-center">
            <Link to="/login" className="btn huge">
              STUDENT
            </Link>
            <Link to="/register" className="btn hugeb">
              TUTOR
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
