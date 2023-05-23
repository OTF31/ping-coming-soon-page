import { Libre_Franklin } from "next/font/google";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "600", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={libreFranklin.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
