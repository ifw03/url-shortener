import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import GlobalStyle from "@/components/GlobalStyle";

export const metadata: Metadata = {
    title: "URL Shortener",
    description: "Shorten long URLs into easy-to-share aliases",
};

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    return (
        <html lang="en">
            <body>
                <GlobalStyle />
                <Header />
                {children}
            </body>
        </html>
    );
}
