import type { Metadata } from "next";

import "./css/index.css";

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
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    );
}