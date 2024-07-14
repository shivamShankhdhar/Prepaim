import "../../globals.css";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Header from "@/app/components/Global/Header";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "PrepAim | Coding",
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
      <body className={cn("min-h-screen bg-background", fontSans.variable)}>
        <main className="flex justify-center bg-red flex-col backdrop-blur-sm  ">
          <div className="sticky top-0 z-10">
            <Header />
          </div>

          {children}
        </main>
      </body>
    </html>
  );
}
