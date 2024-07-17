import { Toaster } from "react-hot-toast";
import "./globals.css";
// import
import { CookiesProvider } from "next-client-cookies/server";
import Header from "./components/Global/Header";

export const metadata = {
  title: "PrepAim | Home",
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
      <body>
        <CookiesProvider>
          <Header />
          <main className="flex flex-col w-full">{children}</main>
        </CookiesProvider>
        <Toaster position="top-center"></Toaster>
      </body>
    </html>
  );
}
