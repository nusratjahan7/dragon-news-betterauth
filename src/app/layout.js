import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        
        <main>{children}</main>
        </body>
    </html>
  );
}
