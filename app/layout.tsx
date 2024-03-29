import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "E-com Admin",
  description: "Admin dashboard for E-com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Wrapped with Clerk Provider
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          {/* imported ModalProvider from providers */}
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
