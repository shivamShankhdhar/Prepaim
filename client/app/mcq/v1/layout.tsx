// import Footer from "../../components/Footer"
import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";
import Header from "@/app/components/Global/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Prepaim.com | Questions",
  description:
    "Prepaim.com helps students to prepare for the examination related to the enginnering for higher education",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    <html>
      <body>
        <div className="flex w-full h-[100vh] overflow-hidden flex-col">
          <Header />
          <CookiesProvider>{children}</CookiesProvider>
        </div>
        <Toaster position="top-center"></Toaster>
      </body>
    </html>
  );
}
