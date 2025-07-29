import type { Metadata } from "next";

import "./styles/index.css";

export const metadata: Metadata = {
    title: "SA - UA Sign",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-bs-theme="light">
            <head>
                <link rel="icon" href="./media/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <link rel="apple-touch-icon" href="./media/logo192.png" />
                <link rel="manifest" href="./media/manifest.json" />
                <link rel="preload" href="/eusign/data/CAs.json?v=20240228" />
                <link rel="preload" href="/eusign/data/Certificates.json?v=20240228" />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}