import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Card } from "@nextui-org/react";
import Ca from "@/components/card";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3 bg-gray-800 text-white">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                <div className="text-center md:text-left">
                  <p>&copy; {new Date().getFullYear()} Diego Valenzuela González. Todos los derechos reservados.</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a href={siteConfig.links.github} className="hover:text-gray-400">GitHub</a>
                  <a href={siteConfig.links.docs} className="hover:text-gray-400">Documentation</a>
                  <a href={siteConfig.links.contact} className="hover:text-gray-400">Contact</a>
                </div>
              </div>
            </footer>
            <Ca />
          </div>
        </Providers>
      </body>
    </html>
  );
}
