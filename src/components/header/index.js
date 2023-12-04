"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Logo from "@/assets/images/Logo.svg";
import Menu from "@/assets/images/menu.svg";
import Close from "@/assets/images/close.svg";
import Image from "next/image";
import { Stack } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { signOut, useSession } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
const Header = () => {
  const session = useSession();
  const ref = useRef();
  const userDetails = session?.data?.user;
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const [isDropdownOpen, setIsdropdownOpen] = useState(false);
  const pageName = usePathname();
  const router = useRouter();

  const pageRedirect = (page) => {
    onMenuClick();
    router.push(page);
  };

  const onMenuClick = () => {
    setIsMenuopen(!isMenuOpen);
  };

  const onProfileClick = () => {
    setIsdropdownOpen(!isDropdownOpen);
  };
  const isMyProfileClicked = () => {
    onProfileClick();
    router.push("/Profile");
  };
  const isSignOutClicked = () => {
    onProfileClick();
    signOut();
  };
  useEffect(() => {
    setIsMenuopen(isMenuOpen);
  }, [isMenuOpen]);

  // useEffect(() => {
  //   const handleOutSideClick = (event) => {
  //     if (!ref.current?.contains(event.target)) {
  //       if (event.target.id === "profileDropDown") {
  //         onProfileClick();
  //       }
  //     }
  //   };

  //   window.addEventListener("mousedown", handleOutSideClick);

  //   return () => {
  //     window.removeEventListener("mousedown", handleOutSideClick);
  //   };
  // }, [ref]);

  return (
    <div>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={{ xs: 4, sm: 2, md: 20 }}
        alignItems="center"
        className="lg:h-20 md:h-20 h-16  2xl:px-32 lg:px-20 md:px-5 px-4 shadow-[0px_4px_13px_0px_rgba(0,0,0,0.14)] "
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 4, sm: 5, md: 10 }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <Image
              src={isMenuOpen ? Close : Menu}
              alt="ZATAHUB"
              width={28}
              height={28}
              className=" lg:hidden md:hidden block cursor-pointer"
              onClick={onMenuClick}
            />
            <Image
              src={Logo}
              alt="ZATAHUB"
              className="lg:w-24 md:w-24 w-16 lg:h-14 md:h-14 h-9 cursor-pointer !ml-0"
              onClick={() => pageRedirect("/")}
            />
          </Stack>
          <Stack
            direction="row"
            spacing={{ sm: 3, md: 6 }}
            display={{ xs: "none", sm: "block" }}
          >
            <span
              className={
                pageName === "/"
                  ? "cursor-pointer lg:text-lg md:text-base text-sm  text-orange-500    hover:border-b-2 hover:border-orange-500 "
                  : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
              }
              onClick={() => pageRedirect("/")}
            >
              Home
            </span>
            <span
              className={
                pageName === "/Scan"
                  ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500 "
                  : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
              }
              onClick={() => pageRedirect("/Scan")}
            >
              Scan
            </span>
            <span
              className={
                pageName === "/Pricing"
                  ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500"
                  : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
              }
              onClick={() => pageRedirect("/Pricing")}
            >
              Pricing
            </span>
            <span
              className={
                pageName === "/Download"
                  ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500"
                  : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
              }
              onClick={() => pageRedirect("/Download")}
            >
              Download
            </span>
          </Stack>
        </Stack>
        {session.status === "authenticated" ? (
          <div className="relative">
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={{ xs: 1, sm: 2, md: 2 }}
            >
              <NotificationsNoneOutlinedIcon fontSize="large" />
              <Stack
                id="profileDropDown"
                direction="row"
                alignItems={"center"}
                spacing={{ xs: 1, sm: 1, md: 1 }}
                onClick={onProfileClick}
                className="cursor-pointer"
                ref={ref}
              >
                <Avatar
                  alt={userDetails?.name}
                  src={userDetails?.image}
                  sx={{ width: 48, height: 48}}
                />
                <span className="text-base ">{userDetails?.name}</span>
                <KeyboardArrowDownIcon />
              </Stack>
            </Stack>
            <div
              ref={ref}
              className={`absolute lg:right-0 lg:top-12 lg:w-44 bg-white border-2  z-10 rounded-md ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <p
                className="text-base lg:p-3 border-2  rounded-sm cursor-pointer"
                onClick={isMyProfileClicked}
              >
                My Profile
              </p>
              <p
                className="text-base lg:p-3 border-2 rounded-sm cursor-pointer"
                onClick={isSignOutClicked}
              >
                Sign Out
              </p>
            </div>
          </div>
        ) : (
          <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 3 }}>
            <button
              onClick={() => router.push("/Signin")}
              className=" lg:w-36 md:w-24 w-20  lg:h-11 md:h-9 h-7 lg:text-lg md:text-base text-sm font-semibold text-orange-500 border-orange-500 border  rounded-full hover:bg-[#FFF0E5]"
            >
              Sign In
            </button>
            <button
              onClick={() => router.push("/Signup")}
              className="   lg:w-36 md:w-24 w-20 lg:h-11 md:h-9 h-7  lg:text-lg md:text-base text-sm font-semibold text-white rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]"
            >
              Sign Up
            </button>
          </Stack>
        )}
      </Stack>
      <div>
        {isMenuOpen ? (
          <div className="displaySm">
            <Dropdown.Menu show={true}>
              <Stack
                direction="column"
                alignItems={"flex-start"}
                spacing={1}
                className="p-5 border border-b-1 border-gray-100 "
              >
                <Dropdown.Item eventKey="3">
                  <span
                    className={
                      pageName === "/"
                        ? "cursor-pointer lg:text-lg md:text-base text-sm  text-orange-500    hover:border-b-2 hover:border-orange-500 "
                        : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
                    }
                    onClick={() => pageRedirect("/")}
                  >
                    Home
                  </span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <span
                    className={
                      pageName === "/Scan"
                        ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500 "
                        : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
                    }
                    onClick={() => pageRedirect("/Scan")}
                  >
                    Scan
                  </span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <span
                    className={
                      pageName === "/Pricing"
                        ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500"
                        : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
                    }
                    onClick={() => pageRedirect("/Pricing")}
                  >
                    Pricing
                  </span>
                </Dropdown.Item>
                <Dropdown.Item eventKey="3">
                  <span
                    className={
                      pageName === "/Download"
                        ? "cursor-pointer lg:text-lg md:text-base text-sm text-orange-500   hover:border-b-2 hover:border-orange-500"
                        : "cursor-pointer lg:text-lg md:text-base text-sm   hover:border-b-2 hover:border-orange-500"
                    }
                    onClick={() => pageRedirect("/Download")}
                  >
                    Download
                  </span>
                </Dropdown.Item>
              </Stack>
            </Dropdown.Menu>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
