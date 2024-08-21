export const metadata = {
  title: "Blog  Post| Prepaim.com",
  description:
    "Prepaim.com helps students to prepare for the examination related to the enginnering for higher education",
};
export default function BlogDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-[80%] m-auto">{children}</div>;
}
