import "./globals.css";

export const metadata = {
  title: "Kyoto Travel Blog",
  description:
    "A beautiful Kyoto travel blog made with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
