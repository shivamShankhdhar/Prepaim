import "../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import Footer from "./components/Footer"
import Header from "@/app/components/Global/Header";
import { Toaster } from "react-hot-toast";
// import Header from "./components/Header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PrepAim | Admin",
  description:
    "Quizzhelp.com helps students to prepare for the examination related to the enginnering and medical sciences for higher education",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html >
      <body >
        <div className="flex w-full">
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </body>
    </html>
  );
}
