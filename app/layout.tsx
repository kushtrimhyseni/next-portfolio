import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import SocialMedia from "@/components/intro-section/SocialMedia";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "KH | Home",
  description: "Porfolio homepage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-portfolio">
        <SocialMedia />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
