import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { Anek_Latin } from "next/font/google";

// import
import { CookiesProvider } from "next-client-cookies/server";
import Header from "./components/Global/Header";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Anek_Latin_fonts = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const latoFonts = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata = {
  title: "Home | PrepAim",
  description:
    "Prepaim.com helps students to prepare for the examination related to the enginnering for higher education",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={Anek_Latin_fonts.className}>
        <CookiesProvider>
          <Header />
          <main
            className={`flex flex-col w-full ${Anek_Latin_fonts.className}`}
          >
            {children}
          </main>
        </CookiesProvider>
        {/* <Toaster position="top-center"></Toaster> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          // transition: Bounce,
        />
      </body>
    </html>
  );
}
