import { FC } from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import ThemeProvider from "@/utils/theme-provider";
import UIProvider from "@/utils/UIProvider";
import "@/styles/globals.css";
import Navibar from "@/components/navbar/Navibar";
import { ApolloWrapper } from "@/lib/apollo-provider";
import Footer from "@/app/_sections/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://aliezan.is-a.dev"),
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={GeistSans.className}>
      <ApolloWrapper>
        <UIProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navibar />
            {children}
            <Footer />
          </ThemeProvider>
        </UIProvider>
      </ApolloWrapper>
    </body>
  </html>
);

export default RootLayout;
