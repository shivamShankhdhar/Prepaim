import "../../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import Footer from "./components/Footer"

import { CookiesProvider } from "next-client-cookies/server";

import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import Header from "@/app/components/Global/Header";
import CodingQuestionAdminSidebar from "./components/CodingQuestionAdminSidebar";
// import Header from "./components/Header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PrepAim | Coding Admin",
  description:
    "Quizzhelp.com helps students to prepare for the examination related to the enginnering and medical sciences for higher education",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={cn("min-h-screen bg-background", fontSans.variable)}>
        <Header />

        <main className="flex">
          <CodingQuestionAdminSidebar />
          <CookiesProvider>{children}</CookiesProvider>
        </main>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
