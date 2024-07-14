import "../../../globals.css";
import { Inter as FontSans } from "next/font/google";
// import Footer from "./components/Footer"
import { cn } from "@/lib/utils";
import Sidebar from "./components/Sidebar";
import Header from "@/app/components/Global/Header";
// import Header from "./components/Header"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PrepAim | MCQ Admin",
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
          <Sidebar />
          {children}
        </main>
        {/* <Toaster position="top-right" reverseOrder={false} /> */}
      </body>
    </html>
  );
}
