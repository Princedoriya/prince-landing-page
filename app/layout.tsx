import "./globals.css";

export const metadata = {
  title: "Prince Doriya | Software Engineer",
  description: "Personal landing page built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
