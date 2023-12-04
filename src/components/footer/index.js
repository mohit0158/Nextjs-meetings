"use client";
import React from "react";
import DiscordIcon from "@/assets/images/discordIcon.svg";
import Logo from "@/assets/images/Logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Stack from "@mui/material/Stack";
const Footer = () => {
  const router = useRouter();
  const pageRedirect = (page) => {
    router.push(page);
  };
  return (
    <footer className="pt-20 2xl:px-32 lg:px-20 md:px-10 px-8 pb-6  text-gray-500 text-sm">
      <div>
        <Stack direction="column" justifyContent={"space-evenly"}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "center", sm: "flex-start" }}
            justifyContent="space-between"
            className=" border-b-2 border-gray-500 pb-5 mb-5 border-opacity-10"
            spacing={{ xs: 2, sm: 4 }}
          >
            <Stack
              direction="column"
              spacing={2}
              alignItems={{ xs: "center", sm: "flex-start" }}
              className="lg:w-1/3 md:w-1/3 w-full"
            >
              <Image
                src={Logo}
                alt="ZATAHUB"
                width={80}
                height={80}
                className="mb-3"
                onClick={() => pageRedirect("/")}
              />
              <div>
                <p>
                  We are the bridge that connects hearts and
                  <br />
                  minds globally. Through seamless video
                  <br />
                  communication
                </p>
              </div>
            </Stack>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems="flex-start"
              spacing={{ xs: 4, sm: 5, md: 12 }}
              className="lg:w-2/3 md:w-2/3 w-full"
            >
              <Stack direction="column" justifyContent={"center"} spacing={1}>
                <div
                  onClick={() => pageRedirect("/Home")}
                  className="cursor-pointer   "
                >
                  Home
                </div>
                <div
                  onClick={() => pageRedirect("/Scan")}
                  className="cursor-pointer   "
                >
                  Scan
                </div>
                <div
                  onClick={() => pageRedirect("/Pricing")}
                  className="cursor-pointer   "
                >
                  Pricing
                </div>
              </Stack>
              <Stack direction="column" justifyContent={"center"} spacing={1}>
                <div
                  onClick={() => pageRedirect("/")}
                  className="cursor-pointer   "
                >
                  Features
                </div>
                <div
                  onClick={() => pageRedirect("/")}
                  className="cursor-pointer   "
                >
                  Testimonials
                </div>
              </Stack>
              <Stack direction="column" justifyContent={"center"} spacing={1}>
                <div
                  onClick={() => pageRedirect("/Termsofservice")}
                  className="cursor-pointer   "
                >
                  Terms of Use
                </div>
                <div
                  onClick={() => pageRedirect("/Privacypolicy")}
                  className="cursor-pointer   "
                >
                  Privacy and Policy
                </div>
              </Stack>
              <Stack direction="column" justifyContent={"center"} spacing={1}>
                <div
                  onClick={() => pageRedirect("/")}
                  className="cursor-pointer   "
                >
                  Follow us on
                </div>
                <div>
                  <Image
                    onClick={() => pageRedirect("/")}
                    src={DiscordIcon}
                    alt="discord"
                    className="w-5 h-5"
                  />
                </div>
              </Stack>
            </Stack>
          </Stack>
          <div className="text-center">
            <p>
              Copyright ©2023 ZataHub Video Communications, Inc. All rights
              reserved
            </p>
          </div>
        </Stack>
      </div>
    </footer>
  );
};

export default Footer;
