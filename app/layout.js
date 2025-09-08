import Sidebar from "@/components/Sidebar";
import "./globals.css";
import AnimatedLayout from "@/components/AnimatedLayout";
import { Newsreader } from "next/font/google";
import { Provider } from "react-redux";
import { store } from "./store";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "News 25",
  description: "Framer Motion + Next.js Demo",
  icons: {
    icon: "/favicon-for-app/favicon.ico",
  },
};
export const newsReader = Newsreader({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${newsReader.className} flex bg-gray-100 min-h-screen`}>
        <ClientProvider>
          <Sidebar />
          <AnimatedLayout>{children}</AnimatedLayout>
        </ClientProvider>
      </body>
    </html>
  );
}
