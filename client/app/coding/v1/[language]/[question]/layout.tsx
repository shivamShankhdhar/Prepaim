import "../../../../globals.css";
import Header from "@/app/components/Global/Header";

import { CookiesProvider } from "next-client-cookies/server";
export const metadata = {
  title: "Prepaim.com | Coding",
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
        <main className="flex flex-col w-full h-[100vh] overflow-hidden">
          <Header />
          <div className="w-full flex flex-row">
            <CookiesProvider>{children}</CookiesProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
