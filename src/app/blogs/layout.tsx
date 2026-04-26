export const metadata = {
  title: "Blog List",
  description: "Description bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
