import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Head from "../Components/head";
import Navbar from "../Components/navebar";
import Newdeal from "../Components/newdeal";
import Populardeal from "../Components/populardeal";
import Footer from "../Components/footer";
import ScrollToTop from "../Components/scrollToTop";


const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; //  this for the hydration error preventing
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Banner />
      <Head />
      <Newdeal />
      <Populardeal />
      <Footer />
    </>
  );
};

export default Index;
