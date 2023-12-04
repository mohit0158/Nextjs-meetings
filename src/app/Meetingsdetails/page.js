"use client";
import React from "react";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ctoImg from "@/assets/images/ctoImg.svg";

const Profile = () => {
  const meetingDetails = {
    meetingTitle: "Weekly Status Update",
    meetingDescription:
      "In this weekly meeting, we'll be going over the current status of ongoing projects. Team members will provide updates on their tasks, and we'll address any challenges or roadblocks. It's an opportunity for collaboration and problem-solving.",
    organizer: {
      name: "Michael Johnson",
    },
    meetingDuration: "1 hour 30 minutes",
    timeOfPost: "3 min",
    attendees: [
      {
        email: "acharlota@liveinternet.ru",
        image: "https://robohash.org/impeditautest.png",
        name: "Kuhn-Harber",
      },
      {
        email: "rhallawellb@dropbox.com",
        image: "https://robohash.org/namquaerataut.pngVMDF AV",
        name: "Goodwin-Skiles",
      },
      {
        email: "lgribbinc@posterous.com",
        image: "https://robohash.org/voluptatemsintnulla.png",
        name: "Casper Inc",
      },
      {
        email: "mturleyd@tumblr.com",
        phoge: "https://robohash.org/quisequienim.png",
        name: "Schoen Inc",
      },
      {
        email: "kminchelle@qq.com",
        image: "https://robohash.org/autquiaut.png",
        name: "Hahn-MacGyver",
      },
      {
        email: "dpierrof@vimeo.com",
        image: "https://robohash.org/porronumquamid.png",
        name: "Steuber, Considine and Padberg",
      },
      {
        email: "vcholdcroftg@ucoz.com",
        image: "https://robohash.org/accusantiumvoluptateseos.png",
        name: "Bogisich and Sons",
      },
      {
        email: "sberminghamh@chron.com",
        image: "https://robohash.org/nihilharumqui.png",
        name: "Metz Group",
      },
      {
        email: "bleveragei@so-net.ne.jp",
        image: "https://robohash.org/delenitipraesentiumvoluptatum.png",
        name: "Bahringer, Auer and Wehner",
      },
      {
        email: "aeatockj@psu.edu",
        image: "https://robohash.org/ipsumutofficiis.png",
        name: "Hoppe Group",
      },
    ],
  };
  return (
    <div>
      <Stack direction="column" alignItems={"center"} className="relative  ">
        <div className="bannerImg bg-no-repeat bg-cover lg:mb-[20%] md:mb-[35%] mb-[100%] lg:p-16 md:p-10 p-8 sm:h-[425px] h-[250px] w-full text-center flex flex-col justify-start">
          <p className="lg:text-sm md:text-sm text-xs font-semibold text-[#FF6D00] mb-3">
            {meetingDetails.timeOfPost} ago
          </p>
          <p className="lg:text-2xl md:text-xl text-lg  lg:px-40 md:px-40 px:0 font-semibold">
            {meetingDetails.meetingTitle}
          </p>
        </div>
        <div className="bg-white w-[85%]  lg:h-[47rem] md:h-[50rem] h-[58rem]  shadow-[0px_4px_88px_0px_#0000000F] absolute lg:top-[19%] md:top-[22%] top-[18%] lg:left-[8%] md:left-[8%] 2xl:left-[8%] left-[8%] z-10 lg:py-8 md:py-8 py-5">
          <Stack direction="column" alignItems={"center"} spacing={3}>
            <div className="lg:px-32 md:px-10 px-8">
              <p className="lg:text-base md:text-sm text-xs  text-[#736D83]  mb-3 font-semibold">
                Description
              </p>
              <p className="lg:text-lg md:text-base text-sm leading-snug">
                {meetingDetails.meetingDescription}
              </p>
            </div>
            <Stack
              direction="column"
              alignItems={"center"}
              spacing={3}
              className="border-y  border-[#B7C0CC]  w-full py-5 max-h-[28rem] overflow-y-scroll lg:px-32 md:10 px-8"
            >
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                spacing={2}
                justifyContent={"flex-start"}
                className="w-full "
              >
                <Avatar
                  alt="Remy Sharp"
                  src={ctoImg}
                  sx={{ width: 56, height: 56 }}
                />
                <Stack direction="column" alignItems={"center"} spacing={1}>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    justifyContent={"flex-start"}
                    className="w-full"
                  >
                    <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83]">
                      Ann Gray
                    </p>
                    <p className="text-xs text-[#736D83]">Yesterday 3:25 PM</p>
                  </Stack>
                  <p className="lg:text-lg md:text-base text-sm">
                    Hey folks, please check your emails. I have shared you the
                    slide.
                  </p>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              spacing={{ xs: 4, sm: 2, md: 12 }}
              justifyContent={"flex-start"}
              className="w-full lg:px-32 md:px-10 px-8"
            >
              <Stack
                direction="row"
                alignItems={"flex-start"}
                spacing={{ xs: 4, sm: 2, md: 12 }}
              >
                <Stack direction="column" alignItems={"flex-start"}>
                  <p className="lg:text-base md:text-sm text-xs font-semibold text-[#736D83]  mb-3 ">
                    Organizer
                  </p>
                  <Stack direction="row" alignItems={"center"} spacing={1}>
                    <Avatar
                      sx={{ bgcolor: "#FF6D00" }}
                      alt={meetingDetails.organizer.name}
                      src="/broken-image.jpg"
                    />
                    <p className="lg:text-base md:text-sm text-xs  text-[#736D83]   ">
                      {meetingDetails.organizer.name}
                    </p>
                  </Stack>
                </Stack>
                <Stack direction="column" alignItems={"flex-start"}>
                  <p className="lg:text-base md:text-sm text-xs font-semibold text-[#736D83]   mb-5 ">
                    Durations
                  </p>
                  <p className="lg:text-lg md:text-base text-sm  text-[#736D83]   ">
                    {meetingDetails.meetingDuration}
                  </p>
                </Stack>
              </Stack>
              <Stack direction="column" alignItems={"flex-start"}>
                <p className="lg:text-base md:text-sm text-xs text-[#736D83] font-semibold  mb-3  ">
                  Attendees ({meetingDetails.attendees.length})
                </p>
                <AvatarGroup max={5} spacing={4}>
                  {meetingDetails.attendees.map((item, index) => {
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
          </Stack>
        </div>
      </Stack>
      <div className="lg:mb-[7%] md:mb-[35%] mb-[100%]" />
    </div>
  );
};

export default Profile;
