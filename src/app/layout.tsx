import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../lib/AuthProvider";
import AuthModal from "../components/AuthModal";

export const metadata: Metadata = {
  title: "Summarist",
  description: "Summarist Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
          <AuthModal />
        </AuthProvider>
      </body>
    </html>
  );
}
