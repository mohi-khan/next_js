import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QuizTypes from "../components/quiztypes";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Quiz App",
  description: "This is an small app where you can create a quiz; and take response from users.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
  <div className="flex h-screen">
  <div className="w-1/5 bg-gray-800 text-white overflow-y-auto h-screen">
  <QuizTypes/>
  </div>
  <div className="flex-grow  h-screen  bg-gray-100 p-4">
  {children}
  </div>
</div>
</body>
</html>
  );
}
