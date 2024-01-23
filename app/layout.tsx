import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import HeadingComponent from "./(landing)/_components/heading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeGen - Practice coding",
  description: "Improve your skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="code-gen"
        >
          <body className={inter.className}>
            <HeadingComponent/>
            {children}
            </body>
        </ThemeProvider>
      </ConvexClientProvider>
    </html>
  );
}
