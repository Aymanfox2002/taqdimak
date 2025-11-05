import React from "react";
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";

interface Children {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Children) {
  return (
    <html>
      <body className="bg-[var(--teal-100-bg)]">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
