import "./globals.css";
// import
import { CookiesProvider } from "next-client-cookies/server";

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
        <div className="flex flex-col w-full">
          <CookiesProvider>{children}</CookiesProvider>
        </div>
      </body>
    </html>
  );
}
