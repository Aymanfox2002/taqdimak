import React from "react";
//@ts-ignore
import "./globals.css";
import ClientWrapper from "../components/ClientWrapper";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-[var(--teal-100-bg)]">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
