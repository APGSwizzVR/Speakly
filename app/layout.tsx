import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Lingora - Learn French",
  description:
    "Learn French with interactive lessons, AI conversations, quizzes and more."
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>
        {children}
      </body>

    </html>
  );
}