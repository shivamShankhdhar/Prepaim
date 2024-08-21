export const metadata = {
  title: "Blog | Prepaim.com",
  description:
    "Prepaim.com helps students to prepare for the examination related to the enginnering for higher education",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[80%] m-auto">{children}</div>;
}
