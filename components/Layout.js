import { Sora } from "@next/font/google";
import Nav from "./Nav";
import Header from "./Header";
import TopLeftImg from "./TopLeftImg";
import Head from "next/head";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <div
      className={`page bg-site text-white bg-cover ${sora.variable} bg-no-repeat font-sora relative `}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
      <Head>
        <title>Hosam portfolio</title>
        <link rel="icon" href="/logo-no-background.svg"  />
      </Head>
    </div>
  );
};

export default Layout;
