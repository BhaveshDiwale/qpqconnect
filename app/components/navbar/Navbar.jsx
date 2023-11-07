import Image from "next/image";
import Link from "next/link";
import { getCookie, setCookie, deleteCookie } from "cookies-next";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = ({ text }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    router.push("/")
    setAnchorEl(null);
  };
  const handleCloseDashboard = () => {
    router.push("/dashboard")
    setAnchorEl(null);
  };

  const userData = getCookie("userData");

  const handleLogout = () => {
    deleteCookie('userData');
  }

  const isCurrentUser = () => {
    if (userData && userData !== undefined) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <nav
      className="border-gray-200 dark:bg-gray-900"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 p-3">
        <a href="/" className="flex items-center">
          {/* <Image
            src="/qpqpq.png"
            className="h-full mr-3"
            width={169}
            height={120}
            alt="Flowbite Logo"
          /> */}
          <Image
            src="/images/qpq.png"
            className="h-full mr-3"
            width={40}
            height={40}
            alt="Flowbite Logo"
          />
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
          {isCurrentUser()
            ? <div className="flex justify-center items-center space-x-10">
              <Link href="/login" className="flex space-x-3 spantext items-center " onClick={handleLogout}>
                <Image src="/svg/logout.svg" width={16} height={16} alt="Profile Icon" />
                <span className="text-[16px] text-white font-semibold">
                  Logout
                </span>
              </Link>
              {/* <Link href="/dashboard" className="hover:bg-[#858282] flex space-x-3 bg-white spantext text-[16px] font-semibold text-black rounded-full px-4 py-2 items-center">
                Dashboard
              </Link> */}
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <Image src="/images/avatar.png" width={38} height={38} alt="Profile Icon" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleCloseDashboard}>
                  <Image src="/images/menu1.png" width={25} height={25} alt="Dashboard Menu" className="mr-3" />
                  Dashboards
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Image src="/images/menu2.png" width={25} height={25} alt="Profile Menu" className="mr-3" />
                  Profile
                </MenuItem>
              </Menu>
              {/* <Link href="/login" className="flex space-x-3 spantext items-center " onClick={handleLogout}>
                <Image src="/images/avatar.png" width={38} height={38} alt="Profile Icon" />
              </Link> */}
            </div>
            : <div className="flex justify-center items-center space-x-10">
              <Link href="/login" className="flex space-x-3 spantext items-center ">
                <Image src="/svg/login.svg" width={20} height={20} alt="Profile Icon" />
                <span className="text-[16px] text-white font-semibold">
                  Login
                </span>
              </Link>
              <Link href="/signup" className="hover:bg-[#858282] flex space-x-3 bg-white spantext text-[16px] font-semibold text-black rounded-full px-4 py-2 items-center">
                Signup
              </Link>
            </div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
