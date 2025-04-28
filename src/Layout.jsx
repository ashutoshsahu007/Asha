import React from 'react'
import { useRef, useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS styles import

import { Outlet } from 'react-router-dom'
const Layout = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const ivfProcessRef = useRef(null);

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1500,
    });
  }, []);


  // Smooth Scroll Function
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Header />
      <Outlet context={{ homeRef, aboutRef, serviceRef, ivfProcessRef }} />
      <Footer
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        ivfProcessRef={ivfProcessRef}
      />
    </>
  )
}

export default Layout
