import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Roboto } from "next/font/google";
import { Anek_Latin } from "next/font/google";

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
        <meta
          name="google-adsense-account"
          content="ca-pub-1113302487630583"
        ></meta>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1113302487630583"
        ></script>

        {/* <!-- prepaim_com --> */}
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
      </body>
    </html>
  );
}
