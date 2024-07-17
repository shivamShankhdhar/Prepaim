import Header from "@/app/components/Global/Header";

import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Login-PrepAim ",
  description:
    "Quizzhelp.com helps students to prepare for the examination related to the enginnering and medical sciences for higher education",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <> {children}</>;
}
