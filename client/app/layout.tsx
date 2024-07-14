import "./globals.css";
// import

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
        <div className="flex flex-col w-full">{children}</div>
      </body>
    </html>
  );
}
