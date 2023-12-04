"use client";
import React from "react";
import ctoImg from "@/assets/images/ctoImg.svg";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const session = useSession();
  const router = useRouter();
 const userDetails = session?.data?.user;
  if (session.status === "unauthenticated") {
    router.replace("/");
  }
  return (
    <div>
      <Stack direction="column" alignItems={"center"} className="relative  ">
        <div className="bannerImg bg-no-repeat bg-cover lg:mb-[30%] md:mb-[30%] mb-[75%] sm:px-16 px-8 sm:h-[425px] h-[250px] w-full text-center flex flex-col justify-center"></div>
        <div className="bg-white w-[85%]  lg:h-[50rem] md:h-[60rem] h-[60rem]  shadow-[0px_4px_88px_0px_#0000000F] absolute sm:top-[10%] top-[6%] sm:left-[8%] 2xl:left-[8%] left-[8%] z-10 sm:p-16 p-8 ">
          <Stack direction="column" alignItems={"center"} spacing={3}>
            <Stack
              direction={{ xs: "column", sm: "column", md: "row" }}
              alignItems={"center"}
              spacing={3}
              className="border-b  border-[#B7C0CC] lg:pb-20 md:pb-10 pb-10"
            >
              <div className="lg:w-1/4 md:w-full w-full lg:px-0 md:px-40 2xl:px-12 px-8">
                <Badge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  badgeContent={
                    <Avatar
                      sx={{
                        bgcolor: "#FF6D00",
                        border: "3px solid currentColor",
                      }}
                    >
                      <PhotoCameraIcon />
                    </Avatar>
                  }
                >
                  <Avatar
                    alt={userDetails?.name}
                    src={userDetails?.image}
                    sx={{ width: 200, height: 200 }}
                  />
                </Badge>
              </div>
              <div className="lg:w-3/4 md:w-full w-full lg:text-left md:text-center text-center ">
                <p className="lg:text-4xl md:text-3xl text-3xl leading-snug">
                  {userDetails?.name} <VerifiedIcon sx={{ color: "#3FCC28" }} />
                </p>
                <Stack
                  direction="row"
                  alignItems={"center"}
                  justifyContent={{
                    xs: "center",
                    sm: "center",
                    md: "flex-start",
                  }}
                  spacing={{ xs: 1, sm: 3, md: 4 }}
                  className="my-5"
                >
                  <p className="sm:text-base text-xs text-[#736D83] leading-snug">
                    <LocationOnIcon sx={{ color: "#736D83" }} /> New York, USA
                  </p>
                  <p className="sm:text-base text-xs text-[#736D83] leading-snug">
                    <EmailIcon sx={{ color: "#736D83" }} /> {userDetails?.email}
                  </p>
                </Stack>
                <p className="lg:text-xl md:text-lg text-base leading-normal ">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using Content
                  here, content here.
                </p>
              </div>
            </Stack>
            <Stack direction="column" spacing={3} className="w-full">
              <Stack
                direction="row"
                justifyContent={"space-between"}
                alignItems={"center"}
                spacing={3}
              >
                <p className="sm:text-2xl text-xl font-semibold leading-snug">
                  Personal Information
                </p>
                <button className="   sm:w-32 w-20 sm:h-11 h-7  font-semibold  text-white rounded-full orangeButton hover:shadow-[0_0_5px_1px_rgba(255,109,0,1)]">
                  Edit
                </button>
              </Stack>
              <Stack direction="row" alignItems={"center"} spacing={12}>
                <Stack direction="column" spacing={3}>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    Phone
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    Location
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    Language
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    Date of Birth
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    Country
                  </p>
                </Stack>
                <Stack direction="column" spacing={3}>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    not set
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    New York, USA
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    english
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    10/30/2023
                  </p>
                  <p className="sm:text-base text-sm text-[#736D83] leading-snug">
                    india
                  </p>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </Stack>
      <div className="lg:mb-0 md:mb-[40%] mb-[100%]" />
    </div>
  );
};

export default Profile;
