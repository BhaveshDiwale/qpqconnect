import Image from "next/image";
import Link from "next/link";

const Navbar = ({ text }) => {
  return (
    <nav
      className="border-gray-200 dark:bg-gray-900"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 p-3">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image
            src="/qpqpq.png"
            className="h-full mr-3"
            width={169}
            height={120}
            alt="Flowbite Logo"
          />
          {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex justify-center items-center space-x-10">
            <div className="">
              <Link href="./login" className="flex space-x-3 spantext items-center ">
                <div className="">
                  <Image src="/svg/login.svg" width={20} height={20} alt="Profile Icon" className="" />
                </div>
                <div>
                  <span className=" text-[20px] text-white font-semibold">
                    Login
                  </span>
                </div>

              </Link>
            </div>
            <div>
              <Link href="./signup" className="hover:bg-[#858282] flex space-x-3 bg-white spantext text-[20px] font-semibold text-black rounded-full px-4 py-2 items-center">
                Signup

              </Link>
            </div>
          </div>
          {/* <ul className="font-medium flex flex-col px-4 md:p-0 mt-2 md:flex-row md:space-x-8 md:mt-0">
          <li className="">  
              <Link
                href="./login"
                className={`block py-2 pl-3 pr-4 ${text}  bg-blue-700  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
                
              >
                Login
              </Link>
            
            </li>
            <li className="bg-white rounded-full px-3 text-gray-950">  <Link
                href="./signup"
                className={`block py-2 pl-3 pr-4 text-black  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500`}
                
              >
                Signup
              </Link></li>
           
          </ul> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
