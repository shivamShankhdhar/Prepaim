import "../../../../globals.css";
import Header from "@/app/components/Global/Header";
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
        <Header />
        <div className="flex flex-row w-full h-[92vh] overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}
