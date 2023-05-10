import "./globals.css";
import React, { ReactNode } from "react";
import AppBar from "./components/AppBar";
import Providers from "./components/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <AppBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
