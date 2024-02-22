import type { Metadata } from "next";
import { Inter,  } from "next/font/google";
import "./globals.css";

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
        <div className="mx-10 md:mx-40">
          <div>
              <button type="submit" className="text-4xl border-2 px-2 py-1 mt-2 rounded-lg">Home</button>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
