import { Toaster } from "react-hot-toast";
import "../styles/globals.css";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";

// import
import { CookiesProvider } from "next-client-cookies/server";
import Header from "./components/Global/Header";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | PrepAim",
  description:
    "This is an educational platform to help students to test their subject knowledge with mcq questions.we have make it effort less for students to reach out to the subjects questions and it will help them to sharpen their subject knowledge to insure maximum marks in their examinations/interviews.",
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
      <body className={poppins.className}>
        <CookiesProvider>
          <Header />
          <main className={`flex flex-col w-full`}>{children}</main>
        </CookiesProvider>
        <Toaster position="top-center"></Toaster>
        <GoogleAnalytics gaId="G-QYJHFSJGRC" />
        <script
          async
          data-cfasync="false"
          src="//pl23995181.highratecpm.com/3be55e302f50f4200add20d753ba95bd/invoke.js"
        ></script>
        <script
          async
          data-cfasync="false"
          src="//embitterlorrycar.com/3be55e302f50f4200add20d753ba95bd/invoke.js"
        ></script>
        <div id="container-3be55e302f50f4200add20d753ba95bd"></div>
      </body>
    </html>
  );
}
