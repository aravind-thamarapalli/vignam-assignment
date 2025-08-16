import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Assignment",
  description: "Landing page assignment with 3D model & video",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
