import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Virgin Atlantic | Front End Coding Test",
  description: "Created by Virgin Atlantic Digital Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="wrapper">
            <Link href="/">
              <Image
                src="/vah-logo.svg"
                alt="Virgin Atlantic Holidays logo"
                width={130}
                height={50}
                priority
              />
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
