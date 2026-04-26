export const metadata = {
  title: `View Detail Blog`,
  description: "Description bla bla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
