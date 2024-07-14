// import Footer from "../../components/Footer"

import { Toaster } from "react-hot-toast";
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
    <div className="flex w-full h-[92vh] overflow-hidden flex-col">
      {children}
      <Toaster position="top-center"></Toaster>
    </div>
  );
}
