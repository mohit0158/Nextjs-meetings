"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import PaginationComp from "@/utils/pagination";
import data from "./meetingsData";
import { useRouter } from "next/navigation";
const Meetings = () => {
  const router = useRouter();

  let meetingTabs = data.meetings.map((list,index) => {
    return (
      <div
        key={index}
        className="bg-white w-full lg:p-14 md:p-10 p-8  shadow-[0px_4px_88px_0px_rgba(0,0,0,0.06)]"
        onClick={() => router.push("/Meetingsdetails")}
      >
        <div className="border-b border-[#B7C0CC] pb-8 mb-8">
          <p className=" text-orange-500 text-[10px]  leading-snug">
            {list.timeOfPost} ago
          </p>
          <p className="lg:text-2xl md:text-xl text-lg font-semibold  !leading-tight my-3 ">
            {list.meetingTitle}
          </p>
          <p className="lg:text-lg md:text-base text-sm  text-[#736D83]  mb-3 ">
            Description
          </p>
          <p className="lg:text-lg md:text-base text-sm leading-snug">
            {list.meetingDescription}
            <span className="text-orange-500 lg:text-sm md:text-xs text-xs ">
              {" "}
              [more]
            </span>
          </p>
        </div>
        <div>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={{ xs: 4, sm: 12 }}
          >
            <Stack direction="row" alignItems={"flex-start"} spacing={12}>
              <Stack direction="column" alignItems={"flex-start"}>
                <p className="lg:text-base md:text-sm text-xs font-semibold text-[#736D83]  mb-3 ">
                  Organizer
                </p>
                <Stack direction="row" alignItems={"center"} spacing={1}>
                  <Avatar
                    sx={{ bgcolor: "#FF6D00" }}
                    alt={list.organizer.name}
                    src="/broken-image.jpg"
                  />
                  <p className="lg:text-base md:text-sm text-xs  text-[#736D83]   ">
                    {list.organizer.name}
                  </p>
                </Stack>
              </Stack>
              <Stack direction="column" alignItems={"flex-start"}>
                <p className="lg:text-base md:text-sm text-xs font-semibold text-[#736D83]   mb-5 ">
                  Durations
                </p>
                <p className="sm:text-lg text-base  text-[#736D83]   ">
                  {list.meetingDuration}
                </p>
              </Stack>
            </Stack>
            <Stack direction="column" alignItems={"flex-start"}>
              <p className="lg:text-base md:text-sm text-xs text-[#736D83] font-semibold  mb-3 ">
                Attendees ({list.attendees.length})
              </p>
              <AvatarGroup max={5} spacing={4}>
                {list.attendees.map((item, index) => {
                  return (
                    <Avatar
                      key={index}
                      alt={item.name}
                      sx={{
                        marginRight: 1,
                        color: "#FF6D00",
                        background: "#FFEADA66",
                      }}
                      src={"item.image"}
                    />
                  );
                })}
              </AvatarGroup>
            </Stack>
          </Stack>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Stack direction="column">
        <div className="relative">
          <div className="bannerImg bg-no-repeat bg-cover lg:mb-[15%] md:mb-[100%] mb-[100%] lg:p-16 md:p-16 p-8 sm:h-[425px] h-[250px] w-full text-center flex flex-col justify-start">
            <p className="lg:text-4xl md:text-3xl text-2lg  lg:px-40 md:px-40 px:0 font-semibold">
              Meetings
            </p>
          </div>
          <div className=" w-full  absolute lg:top-[22%] md:top-[10%] top-[10%] lg:px-28 md:px-12 px-8 z-10  ">
            <Stack direction="column" alignItems={"center"} spacing={3}>
              {meetingTabs}
              <div className="mb-[100%]">
                <PaginationComp count={10} />
              </div>
            </Stack>
          </div>
        </div>
        <div className="lg:m-[87%] md:m-[100%] m-[100%] lg:h-0 md:h-screen h-[465vh]"></div>
      </Stack>
    </div>
  );
};

export default Meetings;
