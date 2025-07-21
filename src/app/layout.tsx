import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "../lib/AuthProvider";
import ClientAuthModal from "../components/ClientAuthModal";
import Sidebar from "../components/Sidebar";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata: Metadata = {
  title: "Summarist",
  description: "Expand your mind in 15 minutes or less",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Sidebar />
          <ClientAuthModal />
          <LayoutWrapper>
            {children}
          </LayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
