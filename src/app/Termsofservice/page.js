"use client";
import React from "react";
import Stack from "@mui/material/Stack";

const TermsOfService = () => {
  return (
    <div>
      <Stack direction="column" alignItems={"center"} className="relative  ">
        <div className="bannerImg bg-no-repeat bg-cover lg:mb-[20%] md:mb-[35%] mb-[100%] lg:p-16 md:p-10 p-8 sm:h-[425px] h-[250px] w-full text-center flex flex-col justify-start">
          <p className="lg:text-sm md:text-sm text-xs font-semibold text-[#FF6D00] mb-3">
            Last updated: November 24, 2023
          </p>
          <p className="lg:text-2xl md:text-xl text-lg  lg:px-40 md:px-40 px:0 font-semibold">
            Terms of Service
          </p>
        </div>
        <div className="bg-white w-[85%]  lg:h-[57rem] md:h-[60rem] h-[68rem]  shadow-[0px_4px_88px_0px_#0000000F] absolute lg:top-[19%] md:top-[16%] top-[18%] lg:left-[8%] md:left-[8%] 2xl:left-[8%] left-[8%] z-10 lg:p-20 md:p-12 p-8 ">
          <Stack direction="column" alignItems={"flex-start"} spacing={3}>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                1. Acceptance of Terms
              </p>
              <p className="lg:text-sm md:text-xs text-xs">
                By using ZATAHUB, a Virtual Meeting Platform For Online
                Conference Video, you agree to comply with these Terms of
                Service.
              </p>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                2. Use of Services
              </p>
              <ul className="lg:text-sm md:text-xs text-xs">
                <li className="list-disc text-sm ml-5 my-2">
                  You agree to use our services in accordance with all
                  applicable laws and regulations. You are responsible for
                  maintaining the confidentiality of your account information.
                </li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                3. User Conduct
              </p>
              <p></p>
              <ul className="lg:text-sm md:text-xs text-xs">
                You agree not to engage in any conduct that may :
                <li className="list-disc text-sm ml-5 my-2">
                  Violate any laws or regulations
                </li>
                <li className="list-disc text-sm ml-5 my-2">
                  Infringe upon the rights of others
                </li>
                <li className="list-disc text-sm ml-5 my-2">
                  Disrupt the functionality or security of our services
                </li>
              </ul>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                4. Intellectual Property
              </p>
              <p className="lg:text-sm md:text-xs text-xs">
                All content and materials available on our website are protected
                by intellectual property laws. You may not use our content
                without permission.
              </p>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                5. Limitation of Liability
              </p>
              <p className="lg:text-sm md:text-xs text-xs">
                We are not liable for any damages or losses resulting from your
                use of our services.
              </p>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                6. Termination
              </p>
              <p className="lg:text-sm md:text-xs text-xs">
                We reserve the right to terminate or suspend your access to our
                services at our discretion, without notice.
              </p>
            </div>
            <div>
              <p className="lg:text-xl md:text-lg text-base font-semibold text-[#736D83] mb-3">
                7. Governing Law
              </p>
              <p className="lg:text-sm md:text-xs text-xs">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of <strong>[Your Jurisdiction]</strong>{" "}
                .
              </p>
              <br />
              <p className="lg:text-sm md:text-xs text-xs">
                This content is a starting point and may need adjustments to fit
                the specific nature of your web app. It&#39;s highly recommended
                to consult with legal professionals to ensure compliance with
                relevant laws and regulations in your jurisdiction
              </p>
            </div>
          </Stack>
        </div>
      </Stack>
      <div className="lg:mb-[20%] md:mb-[40%] mb-[100%] lg:h-0 md:h-0 h-[15vh]" />
    </div>
  );
};

export default TermsOfService;
