import type { Metadata } from "next";
import "./globals.css";
import { Open_Sans, Roboto_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import HeadingComponent from "./(landing)/_components/heading";
import { Toaster } from "sonner";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

//👇 Configure the object for our second font
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

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
          <body className={robotoMono.className}>
            <HeadingComponent />
            <Toaster position="bottom-center" />
            {children}
          </body>
        </ThemeProvider>
      </ConvexClientProvider>
    </html>
  );
}
