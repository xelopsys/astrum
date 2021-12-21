import styled from "styled-components"
import { mobile } from "../utils/responsive"
import { useEffect, useState } from "react";
import {
  Instagram,
  Telegram,
  Facebook
} from "@mui/icons-material"


const Button = styled.div`
  margin-top: 2%;
  width: fit-content;
  height: auto;
  a{
    margin-bottom: 20px;
  }
`;

const Subscribe = styled.div`
  position: absolute;
  ${mobile({ display: "none" })}
`;

const Toggler = styled.div`
  width: fit-content;
  /* border: 1px solid red; */
  height: 70px;
  color: black;
  align-content: flex-start;
`;


export default function HomePage() {
  const [addClass, setAddClass] = useState(true);
  useEffect(() => {
    const Interval = setInterval(() => {
      setAddClass(!addClass);
    }, 5000)
    return () => clearInterval(Interval);
  })

  return (
    <>
      <Subscribe>
        <div className="subscribe-div">
          <span className="subscribe">Follow</span>
          <span>
            <Instagram />
          </span>
          <span className="line"> </span>
          <span>
            <Telegram />
          </span>
          <span className="line"> </span>
          <span>
            <Facebook />
          </span>
        </div>
      </Subscribe>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400"></div>
            <div className="max-w-xl mb-6">
              <h1 className="word">Astrum</h1>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Keling, biz sizning
                <br className="hidden md:block" />
                kelajagingizni{" "}
                <span className="inline-block text-deep-purple-accent-400">
                  yaratamiz
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            {/* <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div> */}
            <br />
            <Button>
              <a href="/" className="button_consultation">
                Бесплатная консультация
                <svg
                  width="30"
                  height="15"
                  viewBox="0 0 30 15"
                  fill="#303030"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.7721 0.0666504L20.4359 1.27938L26.3823 6.67581H0V8.39088H26.3823L20.4359 13.7873L21.7721 15L30 7.53329L21.7721 0.0666504Z" />
                </svg>
              </a>
            </Button>
            <Toggler>
            {addClass ? (
              <p className="">НЕ ОСТАВАЙСЯ НА МЕСТЕ - ДВИГАЙСЯ ✊</p>
            ) : (
              <p className="">
                НАША TECH МИССИЯ -
                <br />
                РАЗВИТЬ НАВЫКИ 21-ГО DIGITAL ВЕКА
              </p>
            )}
          </Toggler>
          </div>
          <div className="flex items-center justify-center -mx-4 lg:pl-8 h:max-content">
            <div className="flex flex-col items-end px-3">
              <img
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="/student.jpg"
                alt=""
              />
              <img
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                src="/student1.jpg"
                alt=""
              />
            </div>
            <div className="px-3">
              <img
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                src="/student2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
