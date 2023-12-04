import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "@/redux/store";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Stack from "@mui/material/Stack";
import Authprovider from "@/utils/authProvider";
const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "ZATAHUB",
  description: "Virtual Meeting Assistance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Authprovider>
          <Providers>
            <Stack>
              <Header />
              {children}
              <Footer />
            </Stack>
          </Providers>
        </Authprovider>
      </body>
    </html>
  );
}
