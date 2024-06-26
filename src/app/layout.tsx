import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import MicrosoftClarity from "./(metrics)/MSClarity";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="snap-y overflow-y-scroll overflow-x-hidden snap-mandatory w-screen h-screen p-0 m-0 box-border">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
        <MicrosoftClarity />
      </body>
    </html>
  );
}
