import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// import
import { CookiesProvider } from "next-client-cookies/server";
import Header from "./components/Global/Header";

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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QYJHFSJGRC"
        ></script>
      </head>
      <body className={Anek_Latin_fonts.className}>
        <CookiesProvider>
          <Header />
          <main
            className={`flex flex-col w-full ${Anek_Latin_fonts.className}`}
          >
            {children}
          </main>
        </CookiesProvider>
        <Toaster position="top-center"></Toaster>
        <GoogleAnalytics gaId="G-QYJHFSJGRC" />
      </body>
    </html>
  );
}
